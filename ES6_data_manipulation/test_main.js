import getListData from "./test_data.js";

// Get the original data
const originalData = getListData();
console.log("Original data:");
console.log(originalData);

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