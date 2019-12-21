import RoundingMode from "../../types/RoundingMode";

/**
 * Rounds to nearest up integer when n is half.
 *
 * @param n The number to round.
 *
 * @returns The rounded entity.
 */
const roundHalfUp: RoundingMode<number> = function(n) {
  return Math.round(n);
};

export default roundHalfUp;
