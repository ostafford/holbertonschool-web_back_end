export default function cleanSet(set, startString) {
  // if "startString" is NOT a type of string or equal to an empty string return an empty string. Dont proceed the function. 
  if (!startString || typeof startString !== 'string' || startString === '') {
    return '';
  }

  // create array to hold matching parts
  const matchingParts = [];

  // for loop to check each value of the set the is passed through the parameter "set"
  for (const value of set) {
    // if each element of the loop is a string and starts with "startString"
    if (typeof value === 'string' && value.startsWith(startString)) {
      // the remaining part of "startString" add it to the array. 
      const remainingPart = value.slice(startString.length);
      // only "push" (append) the non-empty parts.
      if (remainingPart){
        matchingParts.push(remainingPart);
      }
    }
  }
  // "join" add all elements and strings together separated with a "-"
  return matchingParts.join('-');
}