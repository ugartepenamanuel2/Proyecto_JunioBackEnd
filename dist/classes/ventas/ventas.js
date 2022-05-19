"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ventas = void 0;
class Ventas {
    constructor(cod_compra, comprador, vendedor, producto, precio) {
        this._cod_compra = cod_compra;
        this._comprador = comprador;
        this._vendedor = vendedor;
        this._producto = producto;
        this._precio = precio;
    }
    get cod_compra() {
        return this._cod_compra;
    }
    get comprador() {
        return this._comprador;
    }
    get vendedor() {
        return this._vendedor;
    }
    get producto() {
        return this._producto;
    }
    get precio() {
        return this._precio;
    }
}
exports.Ventas = Ventas;
