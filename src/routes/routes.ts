import { Request, Response, Router } from 'express'
import { Dependiente } from '../classes/empleado/dependiente'
import { Empleado} from '../classes/empleado/empleado'
import { Informatico } from '../classes/empleado/informatico'
import { db } from '../database/database'
import { Clientes } from '../model/cliente'
import { Empleados, mSalario, tDependiente, tEmpleado } from '../model/empleado'
import { Productos } from '../model/producto'
import { Ventas } from '../model/venta'



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


// Agregar Empleados //


private agregarInformatico = async (req: Request, res: Response) => {
  const { dni, nombre, edad, especialidades, sueldo, num_reparaciones } = req.body;
  await db.conectarBD();
  const dSchema = {
      _dni :dni,
      _nombre: nombre,
      _edad:edad,
      _especialidades:especialidades,
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



      //  Agregar Productos  //

      private agregarSobremesa = async (req: Request, res: Response) => {
        const { codProducto, nombre, modelo, categoria, gama, precio, tipoPlaca } = req.body;
        await db.conectarBD();
        const dSchema = {
          _codProducto: codProducto,
          _nombre: nombre,
          _modelo: modelo,
          _categoria: categoria,
          _gama: gama,
          _precio: precio,
          _tipoPlaca: tipoPlaca
        };
        const oSchema = new Productos(dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };

      private agregarProducto = async (req: Request, res: Response) => {
        const { codProducto, nombre, modelo, categoria, gama, precio, tipoPlaca } = req.body;
        await db.conectarBD();
        const dSchema = {
            _codProducto:codProducto,
            _nombre: nombre,
            _modelo:modelo,
            _categoria:categoria,
            _gama:gama,
            _precio:precio,
            _tipoPlaca:tipoPlaca

        };
        const oSchema = new Productos(dSchema);
        await oSchema.save()
        await db.desconectarBD();
      };


      private agregarPortatil = async (req: Request, res: Response) => {
        const { codProducto, nombre, modelo, categoria, gama, precio, tipoPlaca, bateria } = req.body;
        await db.conectarBD();
        const dSchema = {
            _codProducto :codProducto,
            _nombre: nombre,
            _modelo:modelo,
            _categoria:categoria,
            _gama:gama,
            _precio:precio,
            _tipoPlaca:tipoPlaca,
            _bateria:bateria
        };
        const oSchema = new Productos(dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };

      private agregarMovil = async (req: Request, res: Response) => {
        const { codProducto, nombre, modelo, categoria, gama, precio, tipoPlaca, pantalla } = req.body;
        await db.conectarBD();
        const dSchema = {
            _codProducto :codProducto,
            _nombre: nombre,
            _modelo:modelo,
            _categoria:categoria,
            _gama:gama,
            _precio:precio,
            _tipoPlaca:tipoPlaca,
            _pantalla:pantalla
        };
        const oSchema = new Productos(dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };

     //  Agregar clientes  //
     
     
      private agregarCliente = async (req: Request, res: Response) => {
        const { dni, nombre, edad } = req.body;
        await db.conectarBD();
        const dSchema = {
            _dni:dni,
            _nombre:nombre,
            _edad:edad
        };
        const oSchema = new Clientes(dSchema);
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
        const oSchema = new Ventas(dSchema);
        await oSchema
          .save()
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
        await db.desconectarBD();
      };




      // Editar Clientes //


      private actualizarCliente = async (req: Request, res: Response) => {
        await db.conectarBD();
        const documento = req.params.dni;
        const {  dni, nombre, edad } = req.body;
        await Clientes.findOneAndUpdate(
          { _dni: documento },
          { _dni: dni, _nombre: nombre, _edad: edad},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };


   // Editar Empleados //


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


  // Editar Productos //


      

      
      private actualizarMovil = async (req: Request, res: Response) => {
        await db.conectarBD();
        const idd = req.params.codProducto;
        const { codProducto,nombre, modelo, categoria, gama, precio, pantalla } = req.body;
        await Productos.findOneAndUpdate(
          { _codProducto: idd },
          { _codProducto: codProducto,_nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio, _pantalla: pantalla},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };

      private actualizarPortail = async (req: Request, res: Response) => {
        await db.conectarBD();
        const idd = req.params.codigo;
        const {  codProducto,nombre, modelo, categoria, gama, precio, bateria } = req.body;
        await Productos.findOneAndUpdate(
          { _codProducto: idd },
          { _codProducto: codProducto,_nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio, _bateria: bateria},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };


      private actualizarSobremesa = async (req: Request, res: Response) => {
        await db.conectarBD();
        const idd = req.params.codProducto;
        const {  codProducto,nombre, modelo, categoria, gama, precio, tipoPlaca } = req.body;
        await Productos.findOneAndUpdate(
          { _codProducto: idd },
          { _codProducto: codProducto,_nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio, _tipoPlaca: tipoPlaca},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };

      private actualizarVenta = async (req: Request, res: Response) => {
        await db.conectarBD();
        const codigo = req.params.codigo;
        const {  cod_compra, comprador, vendedor, producto, precio, } = req.body;
        await Ventas.findOneAndUpdate(
          { _cod_compra: codigo },
          { _cod_compra: cod_compra, _comprador: comprador, _vendedor: vendedor, _producto: producto, _precio: precio},
          { new: true }
        )
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };







      // Eliminar Clientes //

      private eliminarCliente = async (req: Request, res: Response) => {
        await db.conectarBD();
        const documento = req.params.dni;
        await Clientes.findOneAndDelete({ _dni: documento })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };


      // Eliminar Empleados //


      private eliminarEmpleado = async (req: Request, res: Response) => {
        await db.conectarBD();
        const documento = req.params.dni;
        await Empleados.findOneAndDelete({ _dni: documento })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };

// Eliminar Productos //



      private eliminarProducto = async (req: Request, res: Response) => {
        await db.conectarBD();
        const idd = req.params.id;
        await Productos.findOneAndDelete({ _id: idd })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };

// Eliminar Ventas //


      private eliminarVenta = async (req: Request, res: Response) => {
        await db.conectarBD();
        const codigo = req.params.cod_compra;
        await Ventas.findOneAndDelete({ cod_compra: codigo })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };



      // Listar Clientes //

      private listarCliente = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const query = await Clientes.find();
            res.json(query);
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
        await db.desconectarBD();
      };



       // Listar Empleados //

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



       // Listar Productos //

      private listarProductos = async (req: Request, res: Response) => {
        await db
          .conectarBD()
          .then(async (mensaje) => {
            const query = await Productos.find();
            res.json(query);
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
        await db.desconectarBD();
      };

      private listarProducto = async (req: Request, res: Response) => {
        await db.conectarBD();
        const cod = req.params.codProducto;
        await Productos.findOne({ _codProducto: cod })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };

 // Listar Ventas //
     
      private listarVentas = async (req: Request, res: Response) => {
        await db.conectarBD()
          .then(async (mensaje) => {
            const query = await Ventas.find({});
            res.json(query);
          })
          .catch((mensaje) => {
            res.send(mensaje);
          });
        await db.desconectarBD();
      };

      private listarVenta = async (req: Request, res: Response) => {
        await db.conectarBD();
        const codigo = req.params.codigo;
        await Ventas.findOne({ _cod_compra: codigo })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };

       // Listar Clientes //

      private listarClientes = async (req: Request, res: Response) => {
        await db.conectarBD();
        const dni = req.params.dni;
        await Clientes.findOne({ _dni: dni })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };


       // Listar Empleados //

      private listarUnEmpleado = async (req: Request, res: Response) => {
        await db.conectarBD();
        const dni = req.params.dni;
        await Empleados.findOne({ _dni: dni })
          .then((doc: any) => res.send(doc))
          .catch((err: any) => res.send("Error: " + err));
    
        await db.desconectarBD();
      };






      // Calculo //

      private calculoSueldo = async (req: Request, res: Response) => {
        await db.conectarBD();
        let mEmpleado: Empleado = new Empleado("","",0,"",0)
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
            }else if(dEmpleado._especialidades == 'Informatico'){
              mEmpleado = new Informatico(
              dEmpleado._dni,
                dEmpleado._nombre,
                dEmpleado._edad,
                dEmpleado._especialidades,
                dEmpleado._sueldo,
                dEmpleado._num_reparaciones
              )
            }

              let totalS: number = 0;
              totalS = mEmpleado.calculoSueldo_Neto()

              let cEmpleado: mSalario = {
                _dni: null,
                _nombre: null,
                _sueldo: null
              }

              cEmpleado._dni = mEmpleado.dni;
              cEmpleado._nombre = mEmpleado.nombre;
              cEmpleado._sueldo = totalS;

              arrayEmpleado.push(cEmpleado)
            
    
          }
          res.json(arrayEmpleado)
          await db.desconectarBD();
        }
        


    // Funciones //    

    misRutas() {
 

      //Función Básica //

        this._router.get('/', this.index)

      // Funciones agregar //

        this._router.post("/empleado/crearDependiente", this.agregarDependiente);
        this._router.post("/empleado/crearInformatico", this.agregarInformatico);
        this._router.post("/producto/crearProducto", this.agregarProducto);
        this._router.post("/producto/crearSobremesa", this.agregarSobremesa);
        this._router.post("/producto/crearPortatil", this.agregarPortatil);
        this._router.post("/producto/crearMovil", this.agregarMovil);
        this._router.post("/cliente/crearCliente", this.agregarCliente);
        this._router.post("/venta/crearVenta", this.agregarVenta);
       
        // Funciones Borrar //
        
        this._router.delete("/cliente/borrarCliente/:dni", this.eliminarCliente);
        this._router.delete("/borrarEmpleado/:dni", this.eliminarEmpleado);
        this._router.delete("/producto/borrarProducto/:id", this.eliminarProducto);
        this._router.delete("/venta/borrarVenta/:cod_compra", this.eliminarVenta);



      // Funciones listar //

        this._router.get("/cliente/listarCliente", this.listarCliente);
        this._router.get("/listarEmpleado", this.listarEmpleado);
        this._router.get("/producto/listarProducto", this.listarProductos);
        this._router.get("/venta/listarVentas", this.listarVentas);
        this._router.get("/venta/listarVenta/:codigo", this.listarVenta);
        this._router.get("/cliente/listarClientes/:dni", this.listarClientes);
        this._router.get("/listarEmpleado/:dni", this.listarUnEmpleado);
        this._router.get("/verProducto/:codProducto", this.listarProducto);
       
       
    // Funciones Editar //
       
        this._router.put("/cliente/editarCliente/:dni", this.actualizarCliente);
        this._router.put("/empleado/editarInformatico/:dni", this.actualizarInformatico);
        this._router.put("/empleado/editarDependiente/:dni", this.actualizarDependiente);
        this._router.put("/editarMovil/:codProducto", this.actualizarMovil);
        this._router.put("/editarPortatil/:codigo", this.actualizarPortail);
        this._router.put("/editarSobremesa/:codProducto", this.actualizarSobremesa);
        this._router.put("/venta/editarVenta/:codigo", this.actualizarVenta);




        // Funciones de Calculo //

        this._router.get("/calculoSueldoEmpleados", this.calculoSueldo);
        
        
        
        
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router


function html(html: any) {
    throw new Error('Function not implemented.')
}
 