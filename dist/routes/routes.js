"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const dependiente_1 = require("../classes/empleado/dependiente");
const empleado_1 = require("../classes/empleado/empleado");
const informatico_1 = require("../classes/empleado/informatico");
const database_1 = require("../database/database");
const cliente_1 = require("../model/cliente");
const empleado_2 = require("../model/empleado");
const producto_1 = require("../model/producto");
const venta_1 = require("../model/venta");
class IndexRoutes {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(html);
        });
        // Agregar Empleados //
        this.agregarInformatico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //Campos del formulario//
            const { dni, nombre, edad, especialidades, sueldo, num_reparaciones } = req.body;
            yield database_1.db.conectarBD();
            // dSchema son los campos de empleados
            const dSchema = {
                _dni: dni,
                _nombre: nombre,
                _edad: edad,
                _especialidades: especialidades,
                _sueldo: sueldo,
                _num_reparaciones: num_reparaciones
            };
            // Creas Empleados de tipo empleado//
            const oSchema = new empleado_2.Empleados(dSchema);
            // Hasta que no se complete no lo guarda//
            yield oSchema
                // Para guardarlo //
                .save()
                // Si se completa te manda el documento//
                .then((doc) => res.send(doc))
                // Error//
                .catch((err) => res.send("Error: " + err));
            // Se desconecta de la base de datos //
            yield database_1.db.desconectarBD();
        });
        this.agregarDependiente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, edad, especialidades, sueldo, horario } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _dni: dni,
                _nombre: nombre,
                _edad: edad,
                _especialidades: especialidades,
                _sueldo: sueldo,
                _horario: horario
            };
            const oSchema = new empleado_2.Empleados(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        //  Agregar Productos  //
        this.agregarSobremesa = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { codProducto, nombre, modelo, categoria, gama, precio, tipoPlaca } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _codProducto: codProducto,
                _nombre: nombre,
                _modelo: modelo,
                _categoria: categoria,
                _gama: gama,
                _precio: precio,
                _tipoPlaca: tipoPlaca
            };
            const oSchema = new producto_1.Productos(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.agregarProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { codProducto, nombre, modelo, categoria, gama, precio, tipoPlaca } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _codProducto: codProducto,
                _nombre: nombre,
                _modelo: modelo,
                _categoria: categoria,
                _gama: gama,
                _precio: precio,
                _tipoPlaca: tipoPlaca
            };
            const oSchema = new producto_1.Productos(dSchema);
            yield oSchema.save();
            yield database_1.db.desconectarBD();
        });
        this.agregarPortatil = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { codProducto, nombre, modelo, categoria, gama, precio, tipoPlaca, bateria } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _codProducto: codProducto,
                _nombre: nombre,
                _modelo: modelo,
                _categoria: categoria,
                _gama: gama,
                _precio: precio,
                _tipoPlaca: tipoPlaca,
                _bateria: bateria
            };
            const oSchema = new producto_1.Productos(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.agregarMovil = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { codProducto, nombre, modelo, categoria, gama, precio, tipoPlaca, pantalla } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _codProducto: codProducto,
                _nombre: nombre,
                _modelo: modelo,
                _categoria: categoria,
                _gama: gama,
                _precio: precio,
                _tipoPlaca: tipoPlaca,
                _pantalla: pantalla
            };
            const oSchema = new producto_1.Productos(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        //  Agregar clientes  //
        this.agregarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, edad } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _dni: dni,
                _nombre: nombre,
                _edad: edad
            };
            const oSchema = new cliente_1.Clientes(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.agregarVenta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { cod_compra, comprador, vendedor, producto, precio } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _cod_compra: cod_compra,
                _comprador: comprador,
                _vendedor: vendedor,
                _producto: producto,
                _precio: precio
            };
            const oSchema = new venta_1.Ventas(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Editar Clientes //
        this.actualizarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            //El parametro dni se asigna a la variable documento //
            const documento = req.params.dni;
            // Le llega el formulario de cliente//
            const { dni, nombre, edad } = req.body;
            // Busca por el dni y lo actualiza //
            yield cliente_1.Clientes.findOneAndUpdate({ _dni: documento }, { _dni: dni, _nombre: nombre, _edad: edad }, { new: true })
                // Te da el documento //
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Editar Empleados //
        this.actualizarInformatico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const documento = req.params.dni;
            const { dni, nombre, edad, especialidades, sueldo, num_reparaciones } = req.body;
            yield empleado_2.Empleados.findOneAndUpdate({ _dni: documento }, { _dni: dni, _nombre: nombre, _edad: edad, _especialidades: especialidades, _sueldo: sueldo, _num_reparaciones: num_reparaciones }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.actualizarDependiente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const documento = req.params.dni;
            const { dni, nombre, edad, especialidades, sueldo, horario } = req.body;
            yield empleado_2.Empleados.findOneAndUpdate({ _dni: documento }, { _dni: dni, _nombre: nombre, _edad: edad, _especialidades: especialidades, _sueldo: sueldo, _horario: horario }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Editar Productos //
        this.actualizarMovil = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const idd = req.params.codProducto;
            const { codProducto, nombre, modelo, categoria, gama, precio, pantalla } = req.body;
            yield producto_1.Productos.findOneAndUpdate({ _codProducto: idd }, { _codProducto: codProducto, _nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio, _pantalla: pantalla }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.actualizarPortail = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const idd = req.params.codigo;
            const { codProducto, nombre, modelo, categoria, gama, precio, bateria } = req.body;
            yield producto_1.Productos.findOneAndUpdate({ _codProducto: idd }, { _codProducto: codProducto, _nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio, _bateria: bateria }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.actualizarSobremesa = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const idd = req.params.codProducto;
            const { codProducto, nombre, modelo, categoria, gama, precio, tipoPlaca } = req.body;
            yield producto_1.Productos.findOneAndUpdate({ _codProducto: idd }, { _codProducto: codProducto, _nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio, _tipoPlaca: tipoPlaca }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.actualizarVenta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const codigo = req.params.codigo;
            const { cod_compra, comprador, vendedor, producto, precio, } = req.body;
            yield venta_1.Ventas.findOneAndUpdate({ _cod_compra: codigo }, { _cod_compra: cod_compra, _comprador: comprador, _vendedor: vendedor, _producto: producto, _precio: precio }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Eliminar Clientes //
        this.eliminarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            //dni se asigna a la variable documento //
            const documento = req.params.dni;
            yield cliente_1.Clientes.findOneAndDelete({ _dni: documento })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Eliminar Empleados //
        this.eliminarEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const documento = req.params.dni;
            yield empleado_2.Empleados.findOneAndDelete({ _dni: documento })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Eliminar Productos //
        this.eliminarProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const idd = req.params.id;
            yield producto_1.Productos.findOneAndDelete({ _codProducto: idd })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Eliminar Ventas //
        this.eliminarVenta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const codigo = req.params.cod_compra;
            yield venta_1.Ventas.findOneAndDelete({ cod_compra: codigo })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Listar Clientes //
        this.listarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                // Busca en clientes  //
                const query = yield cliente_1.Clientes.find();
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        // Listar Empleados //
        this.listarEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield empleado_2.Empleados.find();
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        // Listar Productos //
        this.listarProductos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield producto_1.Productos.find();
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.listarProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const cod = req.params.codProducto;
            yield producto_1.Productos.findOne({ _codProducto: cod })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Listar Ventas //
        this.listarVentas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield venta_1.Ventas.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.listarVenta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            //El parametro cod_compra se asigna a la variable codigo //   
            const codigo = req.params.codigo;
            // Te busca uno de la cod_compra que tenga codigo  //
            yield venta_1.Ventas.findOne({ _cod_compra: codigo })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Listar Clientes //
        this.listarClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params.dni;
            yield cliente_1.Clientes.findOne({ _dni: dni })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Listar Empleados //
        this.listarUnEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params.dni;
            yield empleado_2.Empleados.findOne({ _dni: dni })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Calculo //
        this.calculoSueldo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            // Variables   //             
            let mEmpleado = new empleado_1.Empleado("", "", 0, "", 0);
            let dEmpleado;
            // Array de salario //
            let arrayEmpleado = [];
            // Buscamos todos los empleados y es un array de documento que se guarda en query //
            const query = yield empleado_2.Empleados.find({});
            // Recorremos el array //
            for (dEmpleado of query) {
                // Si es un dependiente busca un dependiente y si no es informatico //
                if (dEmpleado._especialidades == 'Dependiente') {
                    mEmpleado = new dependiente_1.Dependiente(dEmpleado._dni, dEmpleado._nombre, dEmpleado._edad, dEmpleado._especialidades, dEmpleado._sueldo, dEmpleado._horario);
                }
                else if (dEmpleado._especialidades == 'Informatico') {
                    mEmpleado = new informatico_1.Informatico(dEmpleado._dni, dEmpleado._nombre, dEmpleado._edad, dEmpleado._especialidades, dEmpleado._sueldo, dEmpleado._num_reparaciones);
                }
                // Variable total Salario//
                let totalS = 0;
                totalS = mEmpleado.calculoSueldo_Neto();
                // Variable cEmpleado que se a de tipo mSalario, y eso datos son lo que le va a llegar a la grafica//
                let cEmpleado = {
                    _dni: null,
                    _nombre: null,
                    _sueldo: null
                };
                // Le decimos a cada campo lo que vale  //
                cEmpleado._dni = mEmpleado.dni;
                cEmpleado._nombre = mEmpleado.nombre;
                // Aquí le pasamos el sueldo totalS  //
                cEmpleado._sueldo = totalS;
                // Añadimos a la array //
                arrayEmpleado.push(cEmpleado);
            }
            res.json(arrayEmpleado);
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    // Funciones //    
    routes() {
        //Función Básica //
        this._router.get('/', this.index);
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
const indexRoutes = new IndexRoutes();
indexRoutes.routes();
exports.routes = indexRoutes.router;
function html(html) {
    throw new Error('Function not implemented.');
}
