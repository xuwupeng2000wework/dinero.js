import roundDown from "../roundDown";

describe("#roundDown", () => {
  test("should round down for 1.4", () => {
    expect(roundDown(1.4)).toBe(1);
  });
  test("should round down for -1.4", () => {
    expect(roundDown(-1.4)).toBe(-2);
  });
  test("should round down for 1.6", () => {
    expect(roundDown(1.6)).toBe(1);
  });
  test("should round down for -1.6", () => {
    expect(roundDown(-1.6)).toBe(-2);
  });
});
