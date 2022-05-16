import { Request, Response, Router } from 'express'
import { Dependiente } from '../classes/empleado/dependiente'
import { Empleado } from '../classes/empleado/empleado'
import { db } from '../database/database'
import { Empleados, mSalario, tDependiente, tEmpleado } from '../model/empleado'



class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router() {
        return this._router
    }

    private index = async (req: Request, res: Response) => {
        res.send(html)
    }

    private agregarEmpleado = async (req: Request, res: Response) => {
        const { dni, nombre, edad, especilidades, sueldo } = req.body;
        await db.conectarBD();
        const dSchema = {
            _dni :dni,
            _nombre: nombre,
            _edad:edad,
            _especilidades:especilidades,
            _sueldo:sueldo
        };
        const oSchema = new Empleados(dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };

      private agregarDependiente = async (req: Request, res: Response) => {
        const { dni, nombre, edad, especialidades, sueldo, horario } = req.body;
        await db.conectarBD();
        const dSchema = {
            _dni :dni,
            _nombre: nombre,
            _edad:edad,
            _especialidades:especialidades,
            _sueldo:sueldo,
            _horario: horario
        };
        const oSchema = new Empleados(dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };

      private calculoSueldo = async (req: Request, res: Response) => {
        await db.conectarBD();
        let tmpEmpleado: Empleado
        let dEmpleado: tEmpleado
        let arraySueldo: Array<mSalario> = []
    
        const query = await Empleados.find({})

          for(dEmpleado of query){
              if (dEmpleado._especialidades == 'Dependiente') {
              tmpEmpleado = new Dependiente(
                dEmpleado._dni,
                dEmpleado._nombre,
                dEmpleado._edad,
                dEmpleado._especialidades,
                dEmpleado._sueldo,
                dEmpleado._horario
              )
              let salarioT: number = 0
              salarioT = tmpEmpleado.calculoSueldo_Neto()
    
              let dSalario: mSalario = {
                _dni: null,
                _nombre: null,
                _sueldo: null
    
              }
    
              dSalario._dni = tmpEmpleado.dni
              dSalario._nombre = tmpEmpleado.nombre
              dSalario._sueldo = salarioT
    
    
              arraySueldo.push(dSalario)
            }
            
    
          }
          res.json(arraySueldo)
          await db.desconectarBD();
        }
        


        

    misRutas() {
        this._router.get('/', this.index)

        this._router.post("/crearEmpleado", this.agregarEmpleado);
        this._router.post("/crearDependiente", this.agregarDependiente);




        this._router.get("/calculoSueldoDependiente", this.calculoSueldo);
        
        
        
        
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router


function html(html: any) {
    throw new Error('Function not implemented.')
}
 