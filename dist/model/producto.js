"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const mongoose_1 = require("mongoose");
//schemas por subclase
const ProductoSchema = new mongoose_1.Schema({
    id: {
        type: Number
    },
    nombre: {
        type: String
    },
    modelo: {
        type: String
    },
    categoria: {
        type: String
    },
    gama: {
        type: String
    },
    precio: {
        type: Number
    }
});
exports.Producto = (0, mongoose_1.model)("Producto", ProductoSchema);
