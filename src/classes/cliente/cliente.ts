export  class Cliente {
    private _id:string;
    private _nombre:string;
    private _dni:string;
    private _edad:number;
    
    
    
    
    constructor(
       id:string,nombre:string,dni:string,edad:number,
        ){
            this._id=id;
            this._nombre=nombre;
            this._dni=dni;
            this._edad=edad;
            
           
        }

    get id(){
        return this._id
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
}
   