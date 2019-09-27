import isFloat from "../isFloat";

describe("#isFloat", () => {
  test("should return false with an integer", () => {
    expect(isFloat(5)).toBe(false);
  });
  test("should return true with a float", () => {
    expect(isFloat(5.5)).toBe(true);
  });
  test("should return false with NaN", () => {
    expect(isFloat(NaN)).toBe(false);
  });
  test("should return false with Infinity", () => {
    expect(isFloat(Infinity)).toBe(false);
  });
});
