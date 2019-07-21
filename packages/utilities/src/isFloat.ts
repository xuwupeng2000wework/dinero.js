/**
 * Returns whether a number is a float.
 *
 * @param n The number to test.
 */
const isFloat = (n: number) => Number.isFinite(n) && n % 1 !== 0

export default isFloat
