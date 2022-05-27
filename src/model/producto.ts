import { Schema, model } from "mongoose";

//schemas por subclase
const ProductoSchema = new Schema({
    _codProducto:{
        type: Number
    },
    _nombre:{
        type: String
    },
    _modelo: {
      type: String
    },
    _categoria: {
      type: String
    },
    _gama:{
        type: String
    },
    _precio:{
        type: Number
    },
    _tipoPlaca:{
        type: String
    },
    _pantalla:{
        type:String
    }

});
export const Productos = model("productos", ProductoSchema);