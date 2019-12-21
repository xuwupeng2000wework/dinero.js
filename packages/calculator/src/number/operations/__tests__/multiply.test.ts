import multiply from "../multiply";

describe("#multiply", () => {
  test("should return the product of two numbers", () => {
    expect(multiply(10, 20)).toBe(200);
  });
  test("should return the product of an integer and a float", () => {
    expect(multiply(209050, 8.61)).toBe(1799920.5);
  });
  test("should return the product of two floats", () => {
    expect(multiply(8.52, 8.6186)).toBe(73.430472);
  });
});
