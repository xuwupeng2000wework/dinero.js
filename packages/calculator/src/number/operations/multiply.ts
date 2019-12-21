import { countFractionDigits, isFloat } from "@dinero.js/utilities";
import Operation from "../../types/Operation";

/**
 * Returns the product of one or two floats.
 * @private
 *
 * @param a The first multiplier.
 * @param b The second multiplier.
 */
function multiplyFloats(a: number, b: number) {
  const getFactor = (number: number) => 10 ** countFractionDigits(number);
  const factor = Math.max(getFactor(a), getFactor(b));

  return (Math.round(a * factor) * Math.round(b * factor)) / (factor * factor);
}

const multiply: Operation<number> = function(a, b) {
  return isFloat(a) || isFloat(b) ? multiplyFloats(a, b) : a * b;
}

export default multiply;
