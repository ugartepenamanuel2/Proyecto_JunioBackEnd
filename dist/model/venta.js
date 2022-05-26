"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const mongoose_1 = require("mongoose");
//schemas por subclase
const VentaSchema = new mongoose_1.Schema({
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
exports.Venta = (0, mongoose_1.model)("Venta", VentaSchema);
