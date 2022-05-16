import { Schema, model } from "mongoose";

//schemas por subclase
const EmpleadoSchema = new Schema({
    _dni: {
        type: String
      },
    _nombre:{
        type: String
    },
    
    _edad: {
        type: Number
    },
    _especialidades:{
        type: String
    },
    _sueldo:{
        type: Number
    }, 
    _horario:{
        type: String
    }
    

});
export const Empleados = model("Empleado", EmpleadoSchema);

export type tEmpleado = {
    _dni: string;
    _nombre: string;
    _edad: number;
    _especialidades: string;
    _sueldo: number;
    _horario: string
  };

  export type tDependiente = {
    _dni: string;
    _nombre: string;
    _edad: number;
    _especialidades: string;
    _sueldo: number;
    _horario:string;
  };


  export type mSalario = {
    _dni: string | null;
    _nombre: string | null;
    _sueldo: number | null;
  };