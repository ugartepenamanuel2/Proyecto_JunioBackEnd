"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ventas = void 0;
const mongoose_1 = require("mongoose");
//schemas por subclase
const VentaSchema = new mongoose_1.Schema({
    _cod_compra: {
        type: Number
    },
    _comprador: {
        type: String
    },
    _vendedor: {
        type: String
    },
    _producto: {
        type: String
    },
    _precio: {
        type: Number
    }
});
exports.Ventas = (0, mongoose_1.model)("ventas", VentaSchema);
