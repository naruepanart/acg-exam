const { AddCounter } = require("./add");

describe("test function add", () => {
  const inputTests = [
    {
      name: "should return 3",
      input: [1, 2],
      expected: 3,
    },
    {
      name: "should return 15",
      input: [10, 5],
      expected: 15,
    },
    {
      name: "should return 0",
      input: [1, -1],
      expected: 0,
    },
    {
      name: "should return -7",
      input: [-2, -5],
      expected: -7,
    },
    {
      name: "should return 0",
      input: [0, 0],
      expected: 0,
    },
  ];

  inputTests.forEach((test) => {
    it(test.name, () => {
      // Arrange
      const sum = AddCounter(...test.input);
      // Assert
      expect(sum).toBe(test.expected);
    });
  });
});
