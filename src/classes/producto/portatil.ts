import { Producto } from "./producto";

export class Portatil extends Producto {
    private _bateria: string;

    constructor(id:string,nombre:string,modelo:string,categoria:string,gama:string,precio:number,bateria:string) {

        super(id,nombre,modelo,categoria,gama,precio);
        this._bateria = bateria;
    }


    get bateria(){
        return this._bateria
    }

}