import roundHalfDown from "../roundHalfDown";

describe("#roundHalfDown", () => {
  test("should return normal rounding for 1.4", () => {
    expect(roundHalfDown(1.4)).toBe(1);
  });
  test("should return normal rounding for -1.4", () => {
    expect(roundHalfDown(-1.4)).toBe(-1);
  });
  test("should return nearest down integer for 1.5", () => {
    expect(roundHalfDown(1.5)).toBe(1);
  });
  test("should return nearest down integer for 2.5", () => {
    expect(roundHalfDown(2.5)).toBe(2);
  });
  test("should return nearest down integer for -2.5", () => {
    expect(roundHalfDown(-2.5)).toBe(-3);
  });
});
