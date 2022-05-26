import { Request, Response, Router } from 'express'
import { Dependiente } from '../classes/empleado/dependiente'
import { Empleado } from '../classes/empleado/empleado'
import { db } from '../database/database'
import { Cliente } from '../model/cliente'
import { Empleados, mSalario, tDependiente, tEmpleado } from '../model/empleado'
import { Producto } from '../model/producto'
import { Venta } from '../model/venta'



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


// Agregar Empleado //


private agregarInformatico = async (req: Request, res: Response) => {
  const { dni, nombre, edad, especilidades, sueldo, num_reparaciones } = req.body;
  await db.conectarBD();
  const dSchema = {
      _dni :dni,
      _nombre: nombre,
      _edad:edad,
      _especilidades:especilidades,
      _sueldo:sueldo,
      _num_reparaciones:num_reparaciones
  };
  const oSchema = new Empleados(dSchema);
  await oSchema
    .save()
    .then((doc: any) => res.send(doc))
    .catch((err: any) => res.send("Error: " + err));
  await db.desconectarBD();
};




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



      //  Agregar Producto  //

      private agregarProducto = async (req: Request, res: Response) => {
        const { id, nombre, modelo, categoria, gama, precio } = req.body;
        await db.conectarBD();
        const dSchema = {
            id:id,
            nombre: nombre,
            modelo:modelo,
            categoria:categoria,
            gama:gama,
            precio:precio
        };
        const oSchema = new Producto (dSchema);
        await oSchema.save()
        await db.desconectarBD();
      };

      private agregarSobremesa = async (req: Request, res: Response) => {
        const { id, nombre, modelo, categoria, gama, precio, tipoPlaca } = req.body;
        await db.conectarBD();
        const dSchema = {
            _id :id,
            _nombre: nombre,
            _modelo:modelo,
            _categoria:categoria,
            _gama:gama,
            _precio:precio,
            _tipoPlaca:tipoPlaca
        };
        const oSchema = new Producto (dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };


      private agregarPortatil = async (req: Request, res: Response) => {
        const { id, nombre, modelo, categoria, gama, precio, tipoPlaca, bateria } = req.body;
        await db.conectarBD();
        const dSchema = {
            _id :id,
            _nombre: nombre,
            _modelo:modelo,
            _categoria:categoria,
            _gama:gama,
            _precio:precio,
            _tipoPlaca:tipoPlaca,
            _bateria:bateria
        };
        const oSchema = new Producto (dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };

      private agregarMovil = async (req: Request, res: Response) => {
        const { id, nombre, modelo, categoria, gama, precio, tipoPlaca, pantalla } = req.body;
        await db.conectarBD();
        const dSchema = {
            _id :id,
            _nombre: nombre,
            _modelo:modelo,
            _categoria:categoria,
            _gama:gama,
            _precio:precio,
            _tipoPlaca:tipoPlaca,
            _pantalla:pantalla
        };
        const oSchema = new Producto (dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };

     
     
     
      private agregarCliente = async (req: Request, res: Response) => {
        const { dni, nombre, edad } = req.body;
        await db.conectarBD();
        const dSchema = {
            _dni:dni,
            _nombre:nombre,
            _edad:edad
        };
        const oSchema = new Cliente (dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };



      private agregarVenta = async (req: Request, res: Response) => {
        const { cod_compra, comprador, vendedor, producto, precio} = req.body;
        await db.conectarBD();
        const dSchema = {
            _cod_compra:cod_compra,
            _comprador:comprador,
            _vendedor:vendedor,
            _producto:producto,
            _precio:precio
        };
        const oSchema = new Venta (dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };




      // Editar //


      private actualizarCliente = async (req: Request, res: Response) => {
        await db.conectarBD();
        const documento = req.params.dni;
        const {  dni,nombre, edad } = req.body;
        await Cliente.findOneAndUpdate(
          { _dni: documento },
          { _dni: dni,_nombre: nombre, _edad: edad},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };


      private actualizarEmpleado = async (req: Request, res: Response) => {
        await db.conectarBD();
        const documento = req.params.dni;
        const {  dni,nombre, edad, especialidades, sueldo, horario } = req.body;
        await Empleados.findOneAndUpdate(
          { _dni: documento },
          { _dni: dni,_nombre: nombre, _edad: edad, _especialidades: especialidades, _sueldo: sueldo, _horario: horario},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };



      private actualizarInformatico = async (req: Request, res: Response) => {
        await db.conectarBD();
        const documento = req.params.dni;
        const {  dni,nombre, edad, especialidades, sueldo, num_reparaciones } = req.body;
        await Empleados.findOneAndUpdate(
          { _dni: documento },
          { _dni: dni,_nombre: nombre, _edad: edad, _especialidades: especialidades, _sueldo: sueldo, _num_reparaciones: num_reparaciones},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };




      private actualizarDependiente = async (req: Request, res: Response) => {
        await db.conectarBD();
        const documento = req.params.dni;
        const {  dni,nombre, edad, especialidades, sueldo, horario } = req.body;
        await Empleados.findOneAndUpdate(
          { _dni: documento },
          { _dni: dni,_nombre: nombre, _edad: edad, _especialidades: especialidades, _sueldo: sueldo, _horario: horario},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };

      private actualizarProducto = async (req: Request, res: Response) => {
        await db.conectarBD();
        const idd = req.params.id;
        const {  id,nombre, modelo, categoria, gama, precio } = req.body;
        await Producto.findOneAndUpdate(
          { id: idd },
          { id: id,_nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };
      private actualizarMovil = async (req: Request, res: Response) => {
        await db.conectarBD();
        const idd = req.params.id;
        const {  id,nombre, modelo, categoria, gama, precio, pantalla } = req.body;
        await Empleados.findOneAndUpdate(
          { _id: idd },
          { _id: id,_nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio, _pantalla: pantalla},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };

      private actualizarPortail = async (req: Request, res: Response) => {
        await db.conectarBD();
        const idd = req.params.id;
        const {  id,nombre, modelo, categoria, gama, precio, bateria } = req.body;
        await Empleados.findOneAndUpdate(
          { _id: idd },
          { _id: id,_nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio, _bateria: bateria},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };


      private actualizarSobremesa = async (req: Request, res: Response) => {
        await db.conectarBD();
        const idd = req.params.id;
        const {  id,nombre, modelo, categoria, gama, precio, pantalla } = req.body;
        await Empleados.findOneAndUpdate(
          { _id: idd },
          { _id: id,_nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio, _pantalla: pantalla},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };

      private actualizarVenta = async (req: Request, res: Response) => {
        await db.conectarBD();
        const codigo = req.params.cod_compra;
        const {  cod_compra, comprador, vendedor, producto, precio, } = req.body;
        await Empleados.findOneAndUpdate(
          { _cod_compra: codigo },
          { _cod_compra: cod_compra, _comprador: comprador, _vendedor: vendedor, _producto: producto, _precio: precio},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };







      // Eliminar //

      private eliminarCliente = async (req: Request, res: Response) => {
        await db.conectarBD();
        const documento = req.params.dni;
        await Cliente.findOneAndDelete({ _dni: documento })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };



      private eliminarEmpleado = async (req: Request, res: Response) => {
        await db.conectarBD();
        const documento = req.params.dni;
        await Empleados.findOneAndDelete({ _dni: documento })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };


      private eliminarProducto = async (req: Request, res: Response) => {
        await db.conectarBD();
        const idd = req.params.id;
        await Producto.findOneAndDelete({ id: idd })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };


      private eliminarVenta = async (req: Request, res: Response) => {
        await db.conectarBD();
        const codigo = req.params.cod_compra;
        await Venta.findOneAndDelete({ _cod_compra: codigo })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };



      // Listar //

      private listarCliente = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const query = await Cliente.find();
            res.json(query);
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
        await db.desconectarBD();
      };


      private listarEmpleado = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const query = await Empleados.find();
            res.json(query);
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
        await db.desconectarBD();
      };


      private listarProducto = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const query = await Producto.find();
            res.json(query);
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
        await db.desconectarBD();
      };


     
      private listarVenta = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const query = await Venta.find({});
            res.json(query);
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
        await db.desconectarBD();
      };









      // Calculo //

      private calculoSueldo = async (req: Request, res: Response) => {
        await db.conectarBD();
        let mEmpleado: Empleado
        let dEmpleado: tEmpleado
        let arrayEmpleado: Array<mSalario> = []
    
        const query = await Empleados.find({})

          for(dEmpleado of query){
              if (dEmpleado._especialidades == 'Dependiente') {
              mEmpleado = new Dependiente(
                dEmpleado._dni,
                dEmpleado._nombre,
                dEmpleado._edad,
                dEmpleado._especialidades,
                dEmpleado._sueldo,
                dEmpleado._horario
              )
              let salarioT: number = 0
              salarioT = mEmpleado.calculoSueldo_Neto()
    
              let dSalario: mSalario = {
                _dni: null,
                _nombre: null,
                _sueldo: null
    
              }
    
              dSalario._dni = mEmpleado.dni
              dSalario._nombre = mEmpleado.nombre
              dSalario._sueldo = salarioT
    
    
              arrayEmpleado.push(dSalario)
            }
            
    
          }
          res.json(arrayEmpleado)
          await db.desconectarBD();
        }
        


    // Funciones //    

    misRutas() {
 

      //Función Básica //

        this._router.get('/', this.index)

      // Funciones agregar //

        this._router.post("/crearEmpleado", this.agregarEmpleado);
        this._router.post("/crearDependiente", this.agregarDependiente);
        this._router.post("/crearInformatico", this.agregarInformatico);
        this._router.post("/producto/crearProducto", this.agregarProducto);
        this._router.post("/producto/crearSobremesa", this.agregarSobremesa);
        this._router.post("/producto/crearPortatil", this.agregarPortatil);
        this._router.post("/producto/crearMovil", this.agregarMovil);
        this._router.post("/crearCliente", this.agregarCliente);
        this._router.post("/crearVenta", this.agregarVenta);
       
        // Funciones Borrar //
        
        this._router.delete("/borrarCliente", this.eliminarCliente);
        this._router.delete("/borrarEmpleado", this.eliminarEmpleado);
        this._router.delete("/producto/borrarProducto/:id", this.eliminarProducto);
        this._router.delete("/borrarVenta", this.eliminarVenta);



      // Funciones listar //

        this._router.get("/listarCliente", this.listarCliente);
        this._router.get("/listarEmpleado", this.listarEmpleado);
        this._router.get("/producto/listarProducto", this.listarProducto);
        this._router.get("/venta/listarVenta", this.listarVenta);
       
       
    // Funciones Editar //
       
        this._router.get("/editarCliente", this.actualizarCliente);
        this._router.get("/editarEmpleado", this.actualizarEmpleado);
        this._router.get("/editarInformatico", this.actualizarInformatico);
        this._router.get("/editarDependiente", this.actualizarDependiente);
        this._router.get("/producto/editarProducto/:id", this.actualizarProducto);
        this._router.get("/editarMovil", this.actualizarMovil);
        this._router.get("/editarPortatil", this.actualizarPortail);
        this._router.get("/editarSobremesa", this.actualizarSobremesa);
        this._router.get("/editarVenta", this.actualizarVenta);




        // Funciones de Calculo //

        this._router.get("/calculoSueldoDependiente", this.calculoSueldo);
        
        
        
        
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router


function html(html: any) {
    throw new Error('Function not implemented.')
}
 