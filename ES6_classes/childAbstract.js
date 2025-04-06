class ChildClass extends ParentClass {
    constructor(param1, param2, param3, extraParam) {
      // Call parent constructor first
      super(param1, param2, param3);
      
      // Add any child-specific properties
      this.extraParam = extraParam;
    }
    
    // Must implement this method to avoid the error
    requiredMethod() {
      return `Child implementation using ${this.param1}`;
    }
  }


//   CALLED COMMANDS
// This will throw an error:
const instance = new ParentClass(1, 2, 3);

// This will work:
const childInstance = new ChildClass(1, 2, 3, "extra");