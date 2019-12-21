import add from "../add";

describe("#add", () => {
  test("should return the sum of two numbers", () => {
    expect(add(10, 20)).toBe(30);
  });
});
