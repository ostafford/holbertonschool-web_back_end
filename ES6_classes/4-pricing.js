export default class Pricing {
    constructor(amount, currency){
        this._amount = amount;
        this._currency = currency;
    }

    get amount(){
        return this._amount;
    }
    set amount(newAmount){
        return this._amount = newAmount;
    }
    get currency(){
        return this._currency;
    }
    set currency(newCurrency){
        return this._currency = newCurrency;
    }

    displayFullPrice(){
        return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
    }

    static convertPrice (amount, conversionRate){
        return amount * conversionRate;
    }
}