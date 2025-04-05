export default class Building{
    constructor(sqft){

        if (this.constructor === Building){
            return new Error("Cannot create instance directly");
            }

        this._sqft = sqft;

        if (this.constructor !== Building && !this.evacuationWarningMessage) {
            return new Error("Class extending Building must override evacuationWarningMessage");
        }
    }

    evacuationWarningMessage() {
        return new Error("Class extending Building must override evacuationWarningMessage");
      }

    get sqft(){
        return this._sqft;
    }
    set sqft(newSqft){
        return this._sqft = newSqft;
    }
}