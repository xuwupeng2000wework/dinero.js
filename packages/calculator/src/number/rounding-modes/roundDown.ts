import RoundingMode from "../../types/RoundingMode";

/**
 * Rounds down.
 *
 * @param n The number to round.
 *
 * @returns The rounded entity.
 */
const roundDown: RoundingMode<number> = function(n) {
  return Math.floor(n);
};

export default roundDown;
