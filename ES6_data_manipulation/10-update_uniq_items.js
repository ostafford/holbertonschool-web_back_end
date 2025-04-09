export default function updateUniqueItems(map) {
  // check if the "map" param argument is typeof map
  if (!typeof map) {
    throw new Error('Cannot process');
  }

  // for loop through the map elements (key: value) 
  for (const [key, value] of map.entries()) {
    // check if the quantity is 1 if so update to 100
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}