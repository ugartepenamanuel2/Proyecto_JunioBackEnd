import { Schema, model } from "mongoose";

//schemas por subclase
const VentasSchema = new Schema({
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
export const Ventas = model("Ventas", VentasSchema);