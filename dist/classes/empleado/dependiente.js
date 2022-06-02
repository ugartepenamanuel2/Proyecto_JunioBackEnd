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
        let salario = 0;
        switch (this._horario) {
            case 'V':
                salario = sueldoNeto + 15;
                break;
            case 'S':
                salario = sueldoNeto + 30;
                break;
            case 'D':
                salario = sueldoNeto + 50;
                break;
            default:
                salario = sueldoNeto;
                break;
        }
        return Math.round(salario);
    }
}
exports.Dependiente = Dependiente;
