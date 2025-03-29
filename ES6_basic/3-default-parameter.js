export default function getSumOfHoods(a = initialNumber, b = expansion1989, c = expansion2019) {
    if (b === undefined) {
      b = 89;
    }
  
    if (c === undefined) {
      c = 19;
    }
    return a + b + c;
  }