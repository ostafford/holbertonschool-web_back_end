class ParentClass {
  constructor(param1, param2, param3) {
    // Set up the properties
    this.param1 = param1;
    this.param2 = param2;
    this.param3 = param3;
    
    // Check if someone is trying to create an instance of ParentClass directly
    if (this.constructor === ParentClass) {
      throw new Error("Cannot instantiate ParentClass directly - it's abstract");
    }
    
    // Check if the child class has implemented the required method
    if (this.requiredMethod === ParentClass.prototype.requiredMethod) {
      throw new Error("Child class must override requiredMethod");
    }
  }

  // This tells JavaScript what constructor to use when creating derived objects
  static get [Symbol.species]() {
    return this;
  }
  
  // Method to clone this object
  clone() {
    // Use the species constructor (which might be ParentClass or a child class)
    const Species = this.constructor[Symbol.species];
    
    // Create a new instance with the same properties
    return new Species(this.param1, this.param2, this.param3);
  }

  
  // This is a method that must be overridden by any child class
  requiredMethod() {
    throw new Error("Child class must implement requiredMethod");
  }
  
  // This is a normal method that can be used as-is
  normalMethod() {
    return "This method works in both parent and child classes";
  }
}