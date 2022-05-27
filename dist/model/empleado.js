"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleados = void 0;
const mongoose_1 = require("mongoose");
//schemas por subclase
const EmpleadoSchema = new mongoose_1.Schema({
    _dni: {
        type: String
    },
    _nombre: {
        type: String
    },
    _edad: {
        type: Number
    },
    _especialidades: {
        type: String
    },
    _sueldo: {
        type: Number
    }
});
exports.Empleados = (0, mongoose_1.model)("empleados", EmpleadoSchema);
