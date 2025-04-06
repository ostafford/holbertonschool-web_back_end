import Building from "./5-building";

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors){
        super(sqft);

        this._floors = floors;
    }
    
    evacuationWarningMessage(){
        return new Error(`Evacuate slowly the ${this._floors} floors.`);
        }

    get floors(){
        return this._floors;
    }

    set floors(newFloors){
        return this._floors = newFloors;
    }

}