import { Schema, model } from "mongoose";

//schemas por subclase
const ProductoSchema = new Schema({
    id:{
        type: Number
    },
    nombre:{
        type: String
    },
    modelo: {
      type: String
    },
    categoria: {
      type: String
    },
    gama:{
        type: String
    },
    precio:{
        type: Number
    }

});
export const Producto = model("Producto", ProductoSchema);