import { Schema, model } from "mongoose";

//schemas por subclase
const VentaSchema = new Schema({
    _cod_compra:{
        type: Number
    },
    _comprador:{
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
export const Ventas = model("ventas", VentaSchema);