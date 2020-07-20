function rokket(array1, array2){
    let array = [...new Set([...array1, ...array2])];
    return array.sort();
  }

  console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
  console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]

  // node UniqueNumbers.js