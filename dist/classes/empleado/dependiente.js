"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependiente = void 0;
const empleado_1 = require("./empleado");
class Dependiente extends empleado_1.Empleado {
    constructor(dni, nombre, edad, especilidades, sueldo, horario) {
        super(dni, nombre, edad, especilidades, sueldo);
        this._horario = horario;
    }
    calculoSueldo_Neto() {
        let sueldoNeto = super.calculoSueldo_Neto();
        let plus = this._horario;
        let salario = 0;
        if (plus == "V") {
            salario = sueldoNeto + 15;
        }
        return Math.round(salario);
    }
}
exports.Dependiente = Dependiente;
