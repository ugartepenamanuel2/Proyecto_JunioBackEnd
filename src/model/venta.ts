import { Schema, model } from "mongoose";

//schemas por subclase
const VentaSchema = new Schema({
    cod_compra:{
        type: Number
    },
    comprador:{
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
export const Venta = model("Venta", VentaSchema);