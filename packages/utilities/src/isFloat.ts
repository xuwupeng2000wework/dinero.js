/**
 * Returns whether a number is a float.
 *
 * @param n The number to test.
 */
function isFloat(n: number) {
  return Number.isFinite(n) && n % 1 !== 0;
}

export default isFloat;
