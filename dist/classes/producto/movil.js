"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movil = void 0;
const producto_1 = require("./producto");
class Movil extends producto_1.Producto {
    constructor(id, nombre, modelo, categoria, gama, precio, pantalla) {
        super(id, nombre, modelo, categoria, gama, precio);
        this._pantalla = pantalla;
    }
    get pantalla() {
        return this._pantalla;
    }
}
exports.Movil = Movil;
