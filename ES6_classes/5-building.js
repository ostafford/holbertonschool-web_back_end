export default class Building{
    constructor(sqft){

        if (this.constructor === Building){
            throw new Error("Cannot create instance directly");
            }

        this._sqft = sqft;
    }

    
    get sqft(){
        return this._sqft;
    }
    set sqft(newSqft){
        return this._sqft = newSqft;
    }

    evacuationWarningMessage() {
        throw new Error("Class extending Building must override evacuationWarningMessage");
      }
}