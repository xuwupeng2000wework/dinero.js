import roundHalfOdd from "../roundHalfOdd";

describe("#roundHalfOdd", () => {
  test("should return normal rounding for 1.4", () => {
    expect(roundHalfOdd(1.4)).toBe(1);
  });
  test("should return normal rounding for -1.4", () => {
    expect(roundHalfOdd(-1.4)).toBe(-1);
  });
  test("should return nearest odd integer for 1.5", () => {
    expect(roundHalfOdd(1.5)).toBe(1);
  });
  test("should return nearest odd integer for 2.5", () => {
    expect(roundHalfOdd(2.5)).toBe(3);
  });
  test("should return nearest odd integer for -2.5", () => {
    expect(roundHalfOdd(-2.5)).toBe(-3);
  });
});
