import { isHalf } from "@dinero.js/utilities";

/**
 * Rounds towards and away from zero.
 *
 * @param n The number to round.
 * @param fn The rounding function for half values.
 */
function roundZero(n: number, fn: (n: number) => number) {
  if (isHalf(n)) {
    return Math.sign(n) * fn(Math.abs(n))
  }

  return Math.round(n)
}

export default roundZero;
