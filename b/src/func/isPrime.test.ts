import { describe, expect, it } from "vitest";
import { FindBWPrime } from "./isPrime";

describe("test function FindBWPrime", () => {
  const ipTestSuc = [
    {
      name: "success : 10 - 50",
      lowerNumber: 10,
      higherNumber: 50,
      expected: {
        higherNumber: 50,
        lowerNumber: 10,
        sumOutput: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47],
        sumOutputLength: 11,
      },
    },
    {
      name: "success : 10 - 100",
      lowerNumber: 10,
      higherNumber: 100,
      expected: {
        higherNumber: 100,
        lowerNumber: 10,
        sumOutput: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
        sumOutputLength: 21,
      },
    },
  ];

  ipTestSuc.forEach((test) => {
    it(test.name, () => {
      expect(FindBWPrime(test.lowerNumber, test.higherNumber)).toStrictEqual(test.expected);
    });
  });

  const ipTestFail = [
    {
      name: "fails : lowerNumber and higherNumber is zero",
      lowerNumber: 0,
      higherNumber: 0,
      expected: 0,
    },
    {
      name: "fails : lowerNumber is negative",
      lowerNumber: -5,
      higherNumber: 2,
      expected: 0,
    },
    {
      name: "fails : higherNumber is negative",
      lowerNumber: 7,
      higherNumber: -20,
      expected: 0,
    },
    {
      name: "fails : lowerNumber and higherNumber is negative",
      lowerNumber: -16,
      higherNumber: -20,
      expected: 0,
    },
    {
      name: `fails : lowerNumber [string]`,
      lowerNumber: "10",
      higherNumber: 50,
      expected: 0,
    },
    {
      name: `fails : higherNumber [string]`,
      lowerNumber: 10,
      higherNumber: "50",
      expected: 0,
    },
    {
      name: `fails : lowerNumber and higherNumber [string (number)]`,
      lowerNumber: "10",
      higherNumber: "50",
      expected: 0,
    },
    {
      name: `fails : lowerNumber and higherNumber [string (float)]`,
      lowerNumber: "10.5",
      higherNumber: "50.6",
      expected: 0,
    },
    {
      name: `fails : lowerNumber and higherNumber [string]`,
      lowerNumber: "BNJH",
      higherNumber: "ABCDDDD",
      expected: 0,
    },
    {
      name: "fails : lowerNumber less than 10",
      lowerNumber: 5,
      higherNumber: 20,
      expected: 0,
    },
    {
      name: "fails : higherNumber more than 1000",
      lowerNumber: 15,
      higherNumber: 2000,
      expected: 0,
    },
    {
      name: "fails : lowerNumber more than higherNumber",
      lowerNumber: 50,
      higherNumber: 20,
      expected: 0,
    },
    {
      name: "fails : lowerNumber and higherNumber [string] empty",
      lowerNumber: "",
      higherNumber: "",
      expected: 0,
    },
    {
      name: "fails : lowerNumber [float] and higherNumber [string]",
      lowerNumber: 10.1,
      higherNumber: "-20.1",
      expected: 0,
    },
    {
      name: "fails : lowerNumber [string] and higherNumber [float]",
      lowerNumber: "-10.1",
      higherNumber: 20.1,
      expected: 0,
    },
    {
      name: "fails : lowerNumber [float]",
      lowerNumber: 15.5,
      higherNumber: 20,
      expected: 0,
    },
    {
      name: "fails : higherNumber [float]",
      lowerNumber: 25,
      higherNumber: 30.8,
      expected: 0,
    },
    {
      name: "fails : lowerNumber and higherNumber white-space",
      lowerNumber: " ",
      higherNumber: " ",
      expected: 0,
    },
  ];

  ipTestFail.forEach((v) => {
    it(v.name, () => {
      expect(FindBWPrime(v.lowerNumber, v.higherNumber)).toBe(v.expected);
    });
  });
});
