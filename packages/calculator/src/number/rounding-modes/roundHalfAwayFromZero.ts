import RoundingMode from "../../types/RoundingMode";
import { roundZero } from './utils'

/**
 * Rounds to integer farthest from zero when n is half.
 *
 * @param n The number to round.
 *
 * @returns The rounded entity.
 */
const roundHalfAwayFromZero: RoundingMode<number> = function(n) {
  return roundZero(n, Math.ceil);
};

export default roundHalfAwayFromZero;
