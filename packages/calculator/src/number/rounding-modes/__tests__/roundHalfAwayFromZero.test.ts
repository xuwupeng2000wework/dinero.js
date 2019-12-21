import roundHalfAwayFromZero from "../roundHalfAwayFromZero";

describe("#roundHalfAwayFromZero", () => {
  test("should return normal rounding for 1.4", () => {
    expect(roundHalfAwayFromZero(1.4)).toBe(1);
  });
  test("should return normal rounding for -1.4", () => {
    expect(roundHalfAwayFromZero(-1.4)).toBe(-1);
  });
  test("should return nearest down integer for 1.5", () => {
    expect(roundHalfAwayFromZero(1.5)).toBe(2);
  });
  test("should return nearest down integer for 2.5", () => {
    expect(roundHalfAwayFromZero(2.5)).toBe(3);
  });
  test("should return nearest down integer for -2.5", () => {
    expect(roundHalfAwayFromZero(-2.5)).toBe(-3);
  });
});
