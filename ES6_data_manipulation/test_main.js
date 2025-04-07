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
