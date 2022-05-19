import { Schema, model } from "mongoose";

//schemas por subclase
const ClienteSchema = new Schema({
    dni: {
        type: String
      },
    nombre:{
        type: String
    },
    edad: {
        type: Number
    }
    

});
export const Cliente = model("Cliente", ClienteSchema);