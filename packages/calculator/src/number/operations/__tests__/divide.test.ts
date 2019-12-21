import divide from "../divide";

describe("#divide", () => {
  test("should return the quotient of two numbers", () => {
    expect(divide(20, 2)).toBe(10);
  });
});
