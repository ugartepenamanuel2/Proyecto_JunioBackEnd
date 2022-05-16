import { Producto } from "./producto";

export class Movil extends Producto {
    private _pantalla: string;

    constructor(id:string,nombre:string,modelo:string,categoria:string,gama:string,precio:number,pantalla:string) {

        super(id,nombre,modelo,categoria,gama,precio);
        this._pantalla = pantalla;
    }


    get pantalla(){
        return this._pantalla
    }

}