import { Empleado } from "./empleado";

export class Informatico extends Empleado {
    private _num_reparaciones: string;

    constructor(dni:string,nombre:string,edad:number,especilidades:string,sueldo:number, num_reparaciones:string) {

        super(dni,nombre,edad,especilidades,sueldo);
        this._num_reparaciones = num_reparaciones;
    }


   

}