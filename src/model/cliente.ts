import { Schema, model } from "mongoose";

//schemas por subclase
const ClienteSchema = new Schema({
    id:{
        type: Number
    },
    nombre:{
        type: String
    },
    dni: {
      type: String
    },
    edad: {
        type: Number
    }
    

});
export const Cliente = model("Cliente", ClienteSchema);