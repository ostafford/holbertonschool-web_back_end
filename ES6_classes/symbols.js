class ParentClass {
    constructor(param1, param2, param3){
        this._param1 = param1;
        this._param2 = param2;
        this._param3 = param3;
    }

    static get [Symbol.species](){
        return this;
    }

    clone(){
        const Species = this.constructor[Symbol.species];
        return new Species(this.param1, this.param2, this.param3);
    }
}

class ChildClass extends ParentClass {
    constructor(param1, param2, param3, extraParam) {
      super(param1, param2, param3);
      this._extraParam = extraParam;
    }
  }
  
  
  
  // ========== Running Example Code ==========
  const parent1 = new ParentClass('a', 'b', 'c');
  const child1 = new ChildClass('a', 'b', 'c', 'extra');
  
  const clonedParent1 = parent1.clone();
  const clonedChild1 = child1.clone();

// Clone steps:

clone(){
    const Species = this.constructor[Symbol.species];
    return new Species(this.param1, this.param2, this.param3);
}

// When parent1.clone() is called:
// 1. 'this' refers to parent1 (the instance)
// 2. 'this.constructor' is ParentClass (the class that created parent1)
// 3. 'this.constructor[Symbol.species]' calls the static getter on ParentClass
//    which returns 'this' (ParentClass itself in the static context)
// 4. So 'const Species = this.constructor[Symbol.species]' becomes 'const Species = ParentClass'
// 5. 'return new Species(this.param1, this.param2, this.param3)' creates a new ParentClass instance

// this.constructor -> parent1 -> ParentClass
// [Symbol.species] -> static get -> this (ParentClass)



