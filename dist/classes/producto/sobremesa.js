"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sobremesa = void 0;
const producto_1 = require("./producto");
class Sobremesa extends producto_1.Producto {
    constructor(id, nombre, modelo, categoria, gama, precio, tipoPlaca) {
        super(id, nombre, modelo, categoria, gama, precio);
        this._tipoPlaca = tipoPlaca;
    }
    get tipoPlaca() {
        return this._tipoPlaca;
    }
}
exports.Sobremesa = Sobremesa;
