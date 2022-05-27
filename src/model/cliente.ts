import { Schema, model } from "mongoose";

//schemas por subclase
const ClienteSchema = new Schema({
    _dni: {
        type: String
      },
    _nombre:{
        type: String
    },
    _edad: {
        type: Number
    }
    

});
export const Clientes = model("clientes", ClienteSchema);