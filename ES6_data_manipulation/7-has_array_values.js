export default function hasValuesFromArray(set, array) {
  // "for" every item of the array that gets passed as an argument check if it ".has()" and item in it. If NOT (!) then return false (boolean)
  for (let item of array) {
    if (!set.has(item)) {
      return false;
    }
  }

  return true; 
}