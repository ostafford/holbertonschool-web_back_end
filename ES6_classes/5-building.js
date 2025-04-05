export default class Building{
    constructor(sqft){
        this._sqft = sqft;

        if (this.constructor !== Building){
            }
        }
        
        get sqft(){
            return this._sqft;
        }
        set sqft(newSqft){
            return this._sqft = newSqft;
        }
        
        evacuationWarningMessage(){
                throw new Error("Class extending Building must override evacuationWarningMessage");
            }
    }