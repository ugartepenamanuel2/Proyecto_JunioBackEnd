import { Empleado } from "./empleado";

export class Informatico extends Empleado {
    private _num_reparaciones: number;

    constructor(dni:string,nombre:string,edad:number,especilidades:string,sueldo:number, num_reparaciones:number) {

        super(dni,nombre,edad,especilidades,sueldo);
        this._num_reparaciones = num_reparaciones;
    }
// Calculo de informático //

    override calculoSueldo_Neto(){
        let sueldoNeto = super.calculoSueldo_Neto();
        let total = 0
        if (this._num_reparaciones <= 50) {
            total = sueldoNeto + 100
        }else if (this._num_reparaciones > 50 ) {
            total = sueldoNeto + 250
        }
        

        return Math.round(total)
       }

}