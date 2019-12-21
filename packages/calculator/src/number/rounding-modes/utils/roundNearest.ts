import { isHalf } from "@dinero.js/utilities";

/**
 * Rounds to nearest odd or even integer.
 *
 * @param n The number to round.
 * @param fn The rounding function for half values.
 */
function roundNearest(n: number, fn: (n: number) => boolean) {
  const rounded = Math.round(n);

  if (isHalf(n) && fn(rounded)) {
    return rounded - 1;
  }

  return rounded;
}

export default roundNearest;
