import isHalf from "../isHalf";

describe("#isHalf", () => {
  test("should return true with a half number", () => {
    expect(isHalf(2.5)).toBe(true);
  });
  test("should return true with a negative half number", () => {
    expect(isHalf(-2.5)).toBe(true);
  });
  test("should return false with a non-half number", () => {
    expect(isHalf(2)).toBe(false);
  });
});
