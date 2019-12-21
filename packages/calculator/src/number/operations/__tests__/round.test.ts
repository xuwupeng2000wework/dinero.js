import round from "../round";

describe("#round", () => {
  describe("default", () => {
    test("should return normal rounding for 1.4", () => {
      expect(round(1.4)).toBe(1);
    });
    test("should return normal rounding for -1.4", () => {
      expect(round(-1.4)).toBe(-1);
    });
    test("should return nearest even integer for 1.5", () => {
      expect(round(1.5)).toBe(2);
    });
    test("should return nearest even integer for 2.5", () => {
      expect(round(2.5)).toBe(2);
    });
    test("should return nearest even integer for -2.5", () => {
      expect(round(-2.5)).toBe(-2);
    });
  });
  describe("passing a rounding function", () => {
    test("should round down for 1.4", () => {
      expect(round(1.4, Math.floor)).toBe(1);
    });
    test("should round down for -1.4", () => {
      expect(round(-1.4, Math.floor)).toBe(-2);
    });
    test("should round down for 1.6", () => {
      expect(round(1.6, Math.floor)).toBe(1);
    });
    test("should round down for -1.6", () => {
      expect(round(-1.6, Math.floor)).toBe(-2);
    });
  });
});
