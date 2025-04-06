export default class Airport {
    constructor(name, code){
        this._name = name;
        this._code = code;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        return this._name = newName;
    }

    get code(){
        return this._code;
    }

    set code(newCode){
        return this._code = newCode;
    }
    
    toString(){
        return this.code;
    }
}