export default function cleanSet(set, startString) {
  // if "startString" is NOT a type of string or equal to an empty string return an empty string. Dont proceed the function. 
  if (!startString || typeof startString !== 'string' || startString === '') {
    return '';
  }

  // create array to hold matching parts
  const matchingParts = [];

  // for loop to check each value of the set the is passed through the parameter "set"
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const remainingPart = value.slice(startString.length);
      if (remainingPart){
        matchingParts.push(remainingPart);
      }
    }
  }

  return matchingParts.join('-');
}