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
const database_1 = require("../database/database");
const cliente_1 = require("../model/cliente");
const empleado_1 = require("../model/empleado");
const producto_1 = require("../model/producto");
const venta_1 = require("../model/venta");
class DatoRoutes {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(html);
        });
        // Agregar Empleado //
        this.agregarInformatico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, edad, especialidades, sueldo, num_reparaciones } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _dni: dni,
                _nombre: nombre,
                _edad: edad,
                _especialidades: especialidades,
                _sueldo: sueldo,
                _num_reparaciones: num_reparaciones
            };
            const oSchema = new empleado_1.Empleados(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.agregarEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, edad, especilidades, sueldo } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _dni: dni,
                _nombre: nombre,
                _edad: edad,
                _especilidades: especilidades,
                _sueldo: sueldo
            };
            const oSchema = new empleado_1.Empleados(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
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
            const oSchema = new empleado_1.Empleados(dSchema);
            yield oSchema
                .save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        //  Agregar Producto  //
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
        // Editar //
        this.actualizarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const documento = req.params.dni;
            const { dni, nombre, edad } = req.body;
            yield cliente_1.Clientes.findOneAndUpdate({ _dni: documento }, { _dni: dni, _nombre: nombre, _edad: edad }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.actualizarEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const documento = req.params.dni;
            const { dni, nombre, edad, especialidades, sueldo, horario } = req.body;
            yield empleado_1.Empleados.findOneAndUpdate({ _dni: documento }, { _dni: dni, _nombre: nombre, _edad: edad, _especialidades: especialidades, _sueldo: sueldo, _horario: horario }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.actualizarInformatico = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const documento = req.params.dni;
            const { dni, nombre, edad, especialidades, sueldo, num_reparaciones } = req.body;
            yield empleado_1.Empleados.findOneAndUpdate({ _dni: documento }, { _dni: dni, _nombre: nombre, _edad: edad, _especialidades: especialidades, _sueldo: sueldo, _num_reparaciones: num_reparaciones }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.actualizarDependiente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const documento = req.params.dni;
            const { dni, nombre, edad, especialidades, sueldo, horario } = req.body;
            yield empleado_1.Empleados.findOneAndUpdate({ _dni: documento }, { _dni: dni, _nombre: nombre, _edad: edad, _especialidades: especialidades, _sueldo: sueldo, _horario: horario }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.actualizarProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const idd = req.params.id;
            const { id, nombre, modelo, categoria, gama, precio } = req.body;
            yield producto_1.Productos.findOneAndUpdate({ id: idd }, { id: id, _nombre: nombre, _modelo: modelo, _categoria: categoria, _gama: gama, _precio: precio }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
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
        // Eliminar //
        this.eliminarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const documento = req.params.dni;
            yield cliente_1.Clientes.findOneAndDelete({ dni: documento })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.eliminarEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const documento = req.params.dni;
            yield empleado_1.Empleados.findOneAndDelete({ dni: documento })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.eliminarProducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const idd = req.params.id;
            yield producto_1.Productos.findOneAndDelete({ id: idd })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.eliminarVenta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const codigo = req.params.cod_compra;
            yield venta_1.Ventas.findOneAndDelete({ cod_compra: codigo })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Listar //
        this.listarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield cliente_1.Clientes.find();
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.listarEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield empleado_1.Empleados.find();
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
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
        this.listarVentas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db
                .conectarBD()
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
            const codigo = req.params.codigo;
            yield venta_1.Ventas.findOne({ _cod_compra: codigo })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.listarClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params.dni;
            yield cliente_1.Clientes.findOne({ _dni: dni })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        this.listarUnEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const dni = req.params.dni;
            yield empleado_1.Empleados.findOne({ _dni: dni })
                .then((doc) => res.send(doc))
                .catch((err) => res.send("Error: " + err));
            yield database_1.db.desconectarBD();
        });
        // Calculo //
        this.calculoSueldo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            let mEmpleado;
            let dEmpleado;
            let arrayEmpleado = [];
            const query = yield empleado_1.Empleados.find({});
            for (dEmpleado of query) {
                if (dEmpleado._especialidades == 'Dependiente') {
                    mEmpleado = new dependiente_1.Dependiente(dEmpleado._dni, dEmpleado._nombre, dEmpleado._edad, dEmpleado._especialidades, dEmpleado._sueldo, dEmpleado._horario);
                    let salarioT = 0;
                    salarioT = mEmpleado.calculoSueldo_Neto();
                    let dSalario = {
                        _dni: null,
                        _nombre: null,
                        _sueldo: null
                    };
                    dSalario._dni = mEmpleado.dni;
                    dSalario._nombre = mEmpleado.nombre;
                    dSalario._sueldo = salarioT;
                    arrayEmpleado.push(dSalario);
                }
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
    misRutas() {
        //Función Básica //
        this._router.get('/', this.index);
        // Funciones agregar //
        this._router.post("/crearEmpleado", this.agregarEmpleado);
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
        this._router.put("/editarEmpleado", this.actualizarEmpleado);
        this._router.put("/empleado/editarInformatico/:dni", this.actualizarInformatico);
        this._router.put("/empleado/editarDependiente/:dni", this.actualizarDependiente);
        this._router.put("/producto/editarProducto/:id", this.actualizarProducto);
        this._router.put("/editarMovil/:codProducto", this.actualizarMovil);
        this._router.put("/editarPortatil/:codigo", this.actualizarPortail);
        this._router.put("/editarSobremesa/:codProducto", this.actualizarSobremesa);
        this._router.put("/venta/editarVenta/:codigo", this.actualizarVenta);
        // Funciones de Calculo //
        this._router.get("/calculoSueldoDependiente", this.calculoSueldo);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
function html(html) {
    throw new Error('Function not implemented.');
}
