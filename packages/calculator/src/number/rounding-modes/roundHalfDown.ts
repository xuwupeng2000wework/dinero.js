import RoundingMode from "../../types/RoundingMode";
import { isHalf } from "@dinero.js/utilities";

/**
 * Rounds to nearest down integer when n is half.
 *
 * @param n The number to round.
 *
 * @returns The rounded entity.
 */
const roundHalfDown: RoundingMode<number> = function(n) {
  if (isHalf(n)) {
    return Math.floor(n)
  }

  return Math.round(n)
}

export default roundHalfDown;
