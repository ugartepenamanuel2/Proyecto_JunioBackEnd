export  class Cliente {
    private _dni:string;
    private _nombre:string;
    private _edad:number;
    
    
    
    
    constructor(
       id:string,nombre:string,dni:string,edad:number,
        ){
            this._dni=dni;
            this._nombre=nombre;
            this._edad=edad;
            
           
        }

    get dni(){
            return this._dni
    }
    get nombre(){
        return this._nombre
    }
    get edad(){
        return this._edad
    }
}
   