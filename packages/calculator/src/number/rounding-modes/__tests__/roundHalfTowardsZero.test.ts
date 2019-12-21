import roundHalfTowardsZero from "../roundHalfTowardsZero";

describe("#roundHalfTowardsZero", () => {
  test("should return normal rounding for 1.4", () => {
    expect(roundHalfTowardsZero(1.4)).toBe(1);
  });
  test("should return normal rounding for -1.4", () => {
    expect(roundHalfTowardsZero(-1.4)).toBe(-1);
  });
  test("should return nearest down integer for 1.5", () => {
    expect(roundHalfTowardsZero(1.5)).toBe(1);
  });
  test("should return nearest down integer for 2.5", () => {
    expect(roundHalfTowardsZero(2.5)).toBe(2);
  });
  test("should return nearest down integer for -2.5", () => {
    expect(roundHalfTowardsZero(-2.5)).toBe(-2);
  });
});
