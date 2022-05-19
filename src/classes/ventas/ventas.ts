export  class Ventas {
    private _cod_compra:number;
    private _comprador:string;
    private _vendedor:string;
    private _producto:string;
    private _precio:number;
   
    
    
    constructor(
       cod_compra:number,comprador:string,vendedor:string,producto:string,precio:number
        ){
            this._cod_compra=cod_compra;
            this._comprador=comprador;
            this._vendedor=vendedor;
            this._producto=producto;
            this._precio=precio;
        }

    get cod_compra(){
        return this._cod_compra
    }
    get comprador(){
        return this._comprador
    }
    get vendedor(){
        return this._vendedor
    }
    get producto(){
        return this._producto
    }
    get precio(){
        return this._precio
    }
    
    
    
}