"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(id, nombre, dni, edad) {
        this._dni = dni;
        this._nombre = nombre;
        this._edad = edad;
    }
    get dni() {
        return this._dni;
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
}
exports.Cliente = Cliente;
