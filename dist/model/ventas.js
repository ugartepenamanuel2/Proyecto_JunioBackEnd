"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ventas = void 0;
const mongoose_1 = require("mongoose");
//schemas por subclase
const VentasSchema = new mongoose_1.Schema({
    cod_compra: {
        type: Number
    },
    comprador: {
        type: String
    },
    vendedor: {
        type: String
    },
    producto: {
        type: String
    },
    precio: {
        type: Number
    }
});
exports.Ventas = (0, mongoose_1.model)("Ventas", VentasSchema);
