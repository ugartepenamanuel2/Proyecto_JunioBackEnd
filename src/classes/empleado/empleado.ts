export  class Empleado {
    private _dni:string;
    private _nombre:string;
    private _edad:number;
    private _especilidades:string;
    private _sueldo:number;
    
    
    constructor(
       dni:string,nombre:string,edad:number,especilidades:string,sueldo:number
        ){
            this._dni=dni;
            this._nombre=nombre;
            this._edad=edad;
            this._especilidades=especilidades;
            this._sueldo=sueldo;
        }

    
    get nombre(){
        return this._nombre
    }
    get dni(){
        return this._dni
    }
    get edad(){
        return this._edad
    }
    get especilidades(){
        return this._especilidades
    }
    get sueldo(){
        return this._sueldo
    }
   
    // 1300

    calculoSueldo_Neto(){
        let sueldoBase = this._sueldo
        let impuestos = sueldoBase * 0.7

        return impuestos;
    }

    
    
}