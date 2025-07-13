import { calculator, capitalize, cipher, analyze } from "../index.js";
import { reverse } from "../index.js";

test("Capitalize string", () => {
  let testCases = [
    {
      input: "television",
      expected: "Television",
    },
    {
      input: "dooR",
      expected: "Door",
    },
  ];
  testCases.forEach((testCase) => {
    expect(capitalize(testCase.input)).toBe(testCase.expected);
  });
});

test("Reverse string", () => {
  expect(reverse("drum")).toBe("murd");
});

test("Sum", () => {
  expect(calculator.sum(2, 5)).toBe(7);
});
test("Subtract", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});
test("Product", () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});
test("Division", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("Caeser Cipher", () => {
  expect(cipher("abcd", 2)).toBe("cdef");
});
test("Caeser Cipher Wrapping", () => {
  expect(cipher("xyz", 2)).toBe("zab");
});
test("Caeser Cipher Case", () => {
  expect(cipher("HeLLo", 3)).toBe("KhOOr");
});
test("Caeser Cipher Punctuations", () => {
  expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Analyze Array", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
