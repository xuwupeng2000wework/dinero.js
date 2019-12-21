import { isEven } from "@dinero.js/utilities";
import RoundingMode from "../../types/RoundingMode";
import { roundNearest } from "./utils";

/**
 * Rounds to nearest odd integer when n is half.
 *
 * @param n The number to round.
 *
 * @returns The rounded entity.
 */
const roundHalfOdd: RoundingMode<number> = function(n) {
  return roundNearest(n, isEven);
};

export default roundHalfOdd;
