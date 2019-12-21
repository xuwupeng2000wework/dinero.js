import roundHalfUp from "../roundHalfUp";

describe("#roundHalfUp", () => {
  test("should return normal rounding for 1.4", () => {
    expect(roundHalfUp(1.4)).toBe(1);
  });
  test("should return normal rounding for -1.4", () => {
    expect(roundHalfUp(-1.4)).toBe(-1);
  });
  test("should return nearest up integer for 1.5", () => {
    expect(roundHalfUp(1.5)).toBe(2);
  });
  test("should return nearest up integer for 2.5", () => {
    expect(roundHalfUp(2.5)).toBe(3);
  });
  test("should return nearest up integer for -2.5", () => {
    expect(roundHalfUp(-2.5)).toBe(-2);
  });
});
