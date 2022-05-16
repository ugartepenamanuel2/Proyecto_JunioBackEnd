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
const empleado_1 = require("../model/empleado");
class DatoRoutes {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(html);
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
        this.calculoSueldo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            let tmpEmpleado;
            let dEmpleado;
            let arraySueldo = [];
            const query = yield empleado_1.Empleados.find({});
            for (dEmpleado of query) {
                if (dEmpleado._especialidades == 'Dependiente') {
                    tmpEmpleado = new dependiente_1.Dependiente(dEmpleado._dni, dEmpleado._nombre, dEmpleado._edad, dEmpleado._especialidades, dEmpleado._sueldo, dEmpleado._horario);
                    let salarioT = 0;
                    salarioT = tmpEmpleado.calculoSueldo_Neto();
                    let dSalario = {
                        _dni: null,
                        _nombre: null,
                        _sueldo: null
                    };
                    dSalario._dni = tmpEmpleado.dni;
                    dSalario._nombre = tmpEmpleado.nombre;
                    dSalario._sueldo = salarioT;
                    arraySueldo.push(dSalario);
                }
            }
            res.json(arraySueldo);
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/', this.index);
        this._router.post("/crearEmpleado", this.agregarEmpleado);
        this._router.post("/crearDependiente", this.agregarDependiente);
        this._router.get("/calculoSueldoDependiente", this.calculoSueldo);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
function html(html) {
    throw new Error('Function not implemented.');
}
