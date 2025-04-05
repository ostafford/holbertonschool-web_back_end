export default class Currency{
    constructor(code, name){
        this._code = code;
        this._name = name;
    }
    get code() {
        return this._code;
    }
    set code(newCode) {
        return this._code = newCode;
    }

    get name() {
        return this._name;
    }
    set name(newname) {
        return this._name = newname;
    }

    displayFullCurrency(name, code) {
        return (`${this.name} (${this.code})`);
    }
}