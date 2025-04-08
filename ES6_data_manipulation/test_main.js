import getListData from "./test_data.js";

// Get the original data
const originalData = getListData();
console.log("Original data:");
console.log(originalData);


// ========== map() ========== //

// Transform the data with map
const transformedData = originalData.map(item => {
  return {...item, modified: true};
});
console.log("Transformed data with added 'modified' property:");
console.log(transformedData);

// Extract just IDs
const justIds = originalData.map(item => item.id);
console.log("Just the IDs:");
console.log(justIds);

// Double all IDs
const doubledIds = originalData.map(item => {
  return { ...item, id: item.id * 2 };
});
console.log("Objects with doubled IDs:");
console.log(doubledIds);

// Create entirely new objects based on the data
const newFormat = originalData.map(item => {
  return {
    identifier: item.id,
    isEvenNumber: item.id % 2 === 0
  };
});
console.log("New object format:");
console.log(newFormat);

// =========== filter() ========== //

// Filter objects with even IDs
const evenIdObjects = originalData.filter(item => item.id % 2 === 0);
console.log("Objects with even IDs:");
console.log(evenIdObjects);

// Filter objects with id greater than 0
const nonZeroIds = originalData.filter(item => item.id > 0);
console.log("Objects with ID greater than 0:");
console.log(nonZeroIds);

// Filter objects that have a key property (only the first object)
const hasKeyProperty = originalData.filter(item => 'key' in item);
console.log("Objects with a 'key' property:");
console.log(hasKeyProperty);

// =========== Combining map() and filter() ========== //

// First filter, then map - get IDs of objects with even IDs
const evenIdValues = originalData
  .filter(item => item.id % 2 === 0)
  .map(item => item.id);
console.log("IDs of objects with even IDs:");
console.log(evenIdValues);

// Filter after transforming - double all IDs, then filter for values over 2
const largeDoubledIds = originalData
  .map(item => ({ ...item, id: item.id * 2 }))
  .filter(item => item.id > 2);
console.log("Objects with doubled IDs greater than 2:");
console.log(largeDoubledIds);

// ========== reduce() ==========

// Sum all IDs
const sumOfIds = originalData.reduce((acc, item) => acc + item.id, 0);
console.log("Sum of all IDs:", sumOfIds);

// Concatenate all keys into a single string
const allKeys = originalData.reduce((acc, item, index) => {
  // Get the unique key for this object (key, key1, key2)
  const keyName = index === 0 ? 'key' : `key${index}`;
  return acc + (acc ? ', ' : '') + keyName;
}, '');
console.log("All keys concatenated:", allKeys);

// Count objects with even IDs
const evenIdCount = originalData.reduce((count, item) => {
  if (item.id % 2 === 0) {
    return count + 1;
  }
  return count;
}, 0);
console.log("Number of objects with even IDs:", evenIdCount);

// Create a new object where IDs are the keys and values are the original objects
const objectById = originalData.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});
console.log("Objects indexed by ID:", objectById);

// Group objects by whether their ID is even or odd
const groupedByEvenOdd = originalData.reduce((acc, item) => {
  const key = item.id % 2 === 0 ? 'even' : 'odd';
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
}, {});
console.log("Objects grouped by even/odd ID:", groupedByEvenOdd);

// =========== Combining methods ========== //

// Filter, then map, then reduce - sum of doubled even IDs
const sumOfDoubledEvenIds = originalData
  .filter(item => item.id % 2 === 0)
  .map(item => item.id * 2)
  .reduce((acc, id) => acc + id, 0);
console.log("Sum of doubled even IDs:", sumOfDoubledEvenIds);