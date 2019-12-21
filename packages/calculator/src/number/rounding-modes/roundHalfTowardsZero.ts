import RoundingMode from "../../types/RoundingMode";
import { roundZero } from "./utils";

/**
 * Rounds to integer nearest to zero when n is half.
 *
 * @param n The number to round.
 *
 * @returns The rounded entity.
 */
const roundHalfTowardsZero: RoundingMode<number> = function(n) {
  return roundZero(n, Math.floor);
};

export default roundHalfTowardsZero;
