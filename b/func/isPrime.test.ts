const { FindBWPrime } = require("./isPrime");

describe("test function FindBWPrime", () => {
  const inputTestsSuccess = [
    {
      name: "test prime 10 - 100",
      input: [10, 100],
      expected: {
        higherNumber: 100,
        lowerNumber: 10,
        sumOutput: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
        sumOutputLength: 21,
      },
    },
  ];

  inputTestsSuccess.forEach((test) => {
    it(test.name, () => {
      expect(FindBWPrime(...test.input)).toStrictEqual(test.expected);
    });
  });

  const inputTestsFails = [
    {
      name: "test prime 0 - 0",
      input: [0, 0],
      expected: 0,
    },
    {
      name: "test prime -5 - 2",
      input: [-5, 2],
      expected: 0,
    },
    {
      name: "test prime input string",
      input: ["5", 5],
      expected: 0,
    },
    {
      name: "test prime lowerNumber < 10",
      input: [5, 20],
      expected: 0,
    },
    {
      name: "test prime higherNumber > 1000",
      input: [15, 1001],
      expected: 0,
    },
    {
      name: "test prime lowerNumber > higherNumber",
      input: [50, 20],
      expected: 0,
    },
  ];

  inputTestsFails.forEach((test) => {
    it(test.name, () => {
      expect(FindBWPrime(...test.input)).toBe(test.expected);
    });
  });
});
