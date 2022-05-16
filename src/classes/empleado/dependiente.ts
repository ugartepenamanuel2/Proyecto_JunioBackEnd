import { Empleado } from "./empleado";

export class Dependiente extends Empleado {
    private _horario: string;

    constructor(dni:string,nombre:string,edad:number,especilidades:string,sueldo:number, horario:string) {

        super(dni,nombre,edad,especilidades,sueldo);
        this._horario = horario;
    }


    override calculoSueldo_Neto(){
        let sueldoNeto = super.calculoSueldo_Neto();
        let plus = this._horario
        let salario = 0
        if (plus == "V") {
           salario =  sueldoNeto + 15
        }

        return Math.round(salario)
       }

}