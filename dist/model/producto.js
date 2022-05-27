"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
const mongoose_1 = require("mongoose");
//schemas por subclase
const ProductoSchema = new mongoose_1.Schema({
    _codProducto: {
        type: Number
    },
    _nombre: {
        type: String
    },
    _modelo: {
        type: String
    },
    _categoria: {
        type: String
    },
    _gama: {
        type: String
    },
    _precio: {
        type: Number
    },
    _tipoPlaca: {
        type: String
    },
    _pantalla: {
        type: String
    }
});
exports.Productos = (0, mongoose_1.model)("productos", ProductoSchema);
