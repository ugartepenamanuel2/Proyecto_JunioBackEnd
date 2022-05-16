"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
class Producto {
    constructor(id, nombre, modelo, categoria, gama, precio) {
        this._id = id;
        this._nombre = nombre;
        this._modelo = modelo;
        this._categoria = categoria;
        this._gama = gama;
        this._precio = precio;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get modelo() {
        return this._modelo;
    }
    get categoria() {
        return this._categoria;
    }
    get gama() {
        return this._gama;
    }
    get precio() {
        return this._precio;
    }
}
exports.Producto = Producto;
