"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Informatico = void 0;
const empleado_1 = require("./empleado");
class Informatico extends empleado_1.Empleado {
    constructor(dni, nombre, edad, especilidades, sueldo, num_reparaciones) {
        super(dni, nombre, edad, especilidades, sueldo);
        this._num_reparaciones = num_reparaciones;
    }
}
exports.Informatico = Informatico;
