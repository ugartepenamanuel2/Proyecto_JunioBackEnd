"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(id, nombre, dni, edad) {
        this._id = id;
        this._nombre = nombre;
        this._dni = dni;
        this._edad = edad;
    }
    get id() {
        return this._id;
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
}
exports.Cliente = Cliente;
