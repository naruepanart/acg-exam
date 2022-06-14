type ResponseIsPrime = {
  lowerNumber: number;
  higherNumber: number;
  sumOutput: Array<number>;
  sumOutputLength: number;
};

export const FindBWPrime = (
  lowerNumber: number,
  higherNumber: number
): ResponseIsPrime => {
  let i;
  let sumArray: number[] = [];

  for (i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
      sumArray.push(i);
    }
  }

  return {
    lowerNumber: lowerNumber,
    higherNumber: higherNumber,
    sumOutput: sumArray,
    sumOutputLength: sumArray.length,
  };
};

/* console.log(FindBWPrime(2, 10)); */
