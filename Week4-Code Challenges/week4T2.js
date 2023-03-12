

/**
 * Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements, with the same multiplicities.
 * "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 *
 * Examples
 * Valid arrays
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 * comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
 * It gets obvious if we write b's elements in terms of squares:
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
 * Invalid arrays
 * If we change the first number to something else, comp may not return true anymore:
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
 * comp(a,b) returns false because in b 132 is not the square of any number of a.
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
 * comp(a,b) returns false because in b 36100 is not the square of any number of a.
 *
 * Remarks
 * a or b might be []. a or b might be null.
 *
 * If a or b are null, the problem doesn't make sense so return false.
 *
 * If a or b are empty then the result is self-evident.
 *
 * a or b are empty or not empty lists.
 *
 *

 */
function comp(array1, array2) {
  //your code here
}

//If a or b are null, or one of them is longer than the other, the problem doesn't make sense so return false.
function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }

  // create a copy of array1 and sort it
  const sortArray1 = array1.slice().sort((a,b) => a - b);
  
  // Square each element in array1 and sort the resulting array
  const squaredArray1 = array1.map(num => num ** 2).sort((a, b) => a - b);
  
  // Create a copy of array1, map each element to its square root and sort it
  const sortSqrtArray1 = array1.slice().map((x) => Math.sqrt(x)).sort((a, b) => a - b);  
  
  // Create a copy of array2, map each element to its square root and sort it
  const sortSqrtArray2 = array2.slice().map((x) => Math.sqrt(x)).sort((a, b) => a - b);

  // Check if each element in sortedSqrtArray2 matches the corresponding element in sortedArray1 squared
  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray1[i] * sortedArray1[i] !== sortedSqrtArray2[i]) {
      return false;
    }
  }
  return true;
}



  const map = new Map();
  for (const num of array1) {
    const square = num * num;
    map.set(square, (map.get(square) || 0) + 1);
  }
  for (const num of array2) {
    const count = map.get(num);
    if (count === undefined || count === 0) {
      return false;
    }
    map.set(num, count - 1);
  }
  return true;
}
