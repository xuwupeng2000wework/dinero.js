import modulo from "../modulo";

describe("#modulo", () => {
  test("should return the remainder of two numbers", () => {
    expect(modulo(5, 2)).toBe(1);
  });
});
