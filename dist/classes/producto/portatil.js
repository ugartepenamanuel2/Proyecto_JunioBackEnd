"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portatil = void 0;
const producto_1 = require("./producto");
class Portatil extends producto_1.Producto {
    constructor(id, nombre, modelo, categoria, gama, precio, bateria) {
        super(id, nombre, modelo, categoria, gama, precio);
        this._bateria = bateria;
    }
    get bateria() {
        return this._bateria;
    }
}
exports.Portatil = Portatil;
