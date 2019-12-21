import subtract from "../subtract";

describe("#subtract", () => {
  test("should return the difference of two numbers", () => {
    expect(subtract(20, 10)).toBe(10);
  });
});
