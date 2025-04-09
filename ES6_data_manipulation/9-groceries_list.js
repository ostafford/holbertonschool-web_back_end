export default function groceriesList() {
  // create a map instance
  const groceries = new Map();
  
  // add each item with it's quantity (key: value) method
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  
  // return the list "map instance"
  return groceries;
}
