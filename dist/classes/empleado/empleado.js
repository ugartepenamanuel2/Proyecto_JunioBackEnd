"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(dni, nombre, edad, especilidades, sueldo) {
        this._dni = dni;
        this._nombre = nombre;
        this._edad = edad;
        this._especilidades = especilidades;
        this._sueldo = sueldo;
    }
    get nombre() {
        return this._nombre;
    }
    get dni() {
        return this._dni;
    }
    get edad() {
        return this._edad;
    }
    get especilidades() {
        return this._especilidades;
    }
    get sueldo() {
        return this._sueldo;
    }
    // 1300
    calculoSueldo_Neto() {
        let sueldoBase = this._sueldo;
        let impuestos = sueldoBase * 0.21;
        let totalE = impuestos + sueldoBase;
        return totalE;
    }
}
exports.Empleado = Empleado;
