"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const mongoose_1 = require("mongoose");
//schemas por subclase
const ClienteSchema = new mongoose_1.Schema({
    dni: {
        type: String
    },
    nombre: {
        type: String
    },
    edad: {
        type: Number
    }
});
exports.Cliente = (0, mongoose_1.model)("Cliente", ClienteSchema);
