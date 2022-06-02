import { Empleado } from "./empleado";

export class Dependiente extends Empleado {
    private _horario: string;

    constructor(dni:string,nombre:string,edad:number,especilidades:string,sueldo:number, horario:string) {

        super(dni,nombre,edad,especilidades,sueldo);
        this._horario = horario;
    }
// Calculo de dependiente //

    override calculoSueldo_Neto(){
        let sueldoNeto = super.calculoSueldo_Neto();
        let salario = 0
        switch (this._horario) {
            case 'V':
              salario = sueldoNeto + 15
              break;
            case 'S':
                salario = sueldoNeto + 30
              break;
              case 'D':
                salario = sueldoNeto + 50
              break;
           
            default:
              salario = sueldoNeto
              break;
          }

        return Math.round(salario)
       }

}