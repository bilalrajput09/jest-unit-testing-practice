const {
  stringLength,
  stringReverse,
  calculator,
  capitalizeFirstLetter,
} = require("../main.js");

test("Check the length of the string", () => {
  expect(stringLength("bilal")).toBe(5);
});

test("Check if the string is at least 1 char long and not longer more than 10 char", () => {
  expect(stringLength("bilal")).toBeGreaterThan(1);
  expect(stringLength("bilal")).toBeLessThan(10);
});

test("Check the string is reversed", () => {
  expect(stringReverse("bilal")).toEqual("lalib");
});

describe("Checking calculator object functionality", () => {
  test("Checking if the function is defined", () => {
    expect(calculator.add).toBeDefined();
  });

  test("Checking if the function returns as expected", () => {
    expect(calculator.add(12, 12)).toBe(24);
  });

  test("Checking if the function returns as expected", () => {
    expect(calculator.add(10, 12)).toBe(22);
  });
});

describe("Checking calculator object functionality", () => {
  test("Checking if the function is defined", () => {
    expect(calculator.subtract).toBeDefined();
  });

  test("Checking if the function returns as expected", () => {
    expect(calculator.subtract(12, 12)).toBe(0);
  });

  test("Checking if the function returns as expected", () => {
    expect(calculator.subtract(10, 12)).toBe(-2);
  });
});

describe("Checking calculator object functionality", () => {
  test("Checking if the function is defined", () => {
    expect(calculator.divide).toBeDefined();
  });

  test("Checking if the function returns as expected", () => {
    expect(calculator.divide(12, 2)).toBe(6);
  });

  test("Checking if the function returns as expected", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });
});

describe("Checking calculator object functionality", () => {
  test("Checking if the function is defined", () => {
    expect(calculator.multiply).toBeDefined();
  });

  test("Checking if the function returns as expected", () => {
    expect(calculator.multiply(12, 2)).toBe(24);
  });

  test("Checking if the function returns as expected", () => {
    expect(calculator.multiply(10, 5)).toBe(50);
  });
});

test("Checking if the first letter of the string passed in is capital", () => {
  expect(capitalizeFirstLetter("bilal")).toEqual("Bilal");
});
