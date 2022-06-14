const { FindBWPrime } = require("./isPrime");

describe("test function FindBWPrime", () => {
  const inputTests = [
    {
      name: "test prime 2 - 10",
      input: [2, 10],
      expected: {
        higherNumber: 10,
        lowerNumber: 2,
        sumOutput: [2, 3, 5, 7],
        sumOutputLength: 4,
      },
    },
    {
      name: "test prime 1 - 100",
      input: [1, 100],
      expected: {
        higherNumber: 100,
        lowerNumber: 1,
        sumOutput: [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97,
        ],
        sumOutputLength: 25,
      },
    },
  ];

  inputTests.forEach((test) => {
    it(test.name, () => {
      // Assert
      expect(FindBWPrime(...test.input)).toStrictEqual(test.expected);
    });
  });
});
