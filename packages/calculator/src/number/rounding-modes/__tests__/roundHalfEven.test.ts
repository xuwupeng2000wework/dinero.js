import roundHalfEven from "../roundHalfEven";

describe("#roundHalfEven", () => {
  test("should return normal rounding for 1.4", () => {
    expect(roundHalfEven(1.4)).toBe(1);
  });
  test("should return normal rounding for -1.4", () => {
    expect(roundHalfEven(-1.4)).toBe(-1);
  });
  test("should return nearest even integer for 1.5", () => {
    expect(roundHalfEven(1.5)).toBe(2);
  });
  test("should return nearest even integer for 2.5", () => {
    expect(roundHalfEven(2.5)).toBe(2);
  });
  test("should return nearest even integer for -2.5", () => {
    expect(roundHalfEven(-2.5)).toBe(-2);
  });
});
