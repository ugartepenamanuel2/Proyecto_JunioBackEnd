import { Producto } from "./producto";

export class Sobremesa extends Producto {
    private _tipoPlaca: string;

    constructor(id:string,nombre:string,modelo:string,categoria:string,gama:string,precio:number,tipoPlaca:string) {

        super(id,nombre,modelo,categoria,gama,precio);
        this._tipoPlaca = tipoPlaca;
    }


    get tipoPlaca(){
        return this._tipoPlaca
    }

}

