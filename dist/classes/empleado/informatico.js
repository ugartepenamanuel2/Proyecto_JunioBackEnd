"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Informatico = void 0;
const empleado_1 = require("./empleado");
class Informatico extends empleado_1.Empleado {
    constructor(dni, nombre, edad, especilidades, sueldo, num_reparaciones) {
        super(dni, nombre, edad, especilidades, sueldo);
        this._num_reparaciones = num_reparaciones;
    }
    // Calculo de informático //
    calculoSueldo_Neto() {
        let sueldoNeto = super.calculoSueldo_Neto();
        let total = 0;
        if (this._num_reparaciones <= 50) {
            total = sueldoNeto + 100;
        }
        else if (this._num_reparaciones > 50) {
            total = sueldoNeto + 250;
        }
        return Math.round(total);
    }
}
exports.Informatico = Informatico;
