import { isEven } from "@dinero.js/utilities";
import RoundingMode from "../../types/RoundingMode";
import { roundNearest } from "./utils/";

/**
 * Rounds to nearest even integer when n is half.
 *
 * @param n The number to round.
 *
 * @returns The rounded entity.
 */
const roundHalfEven: RoundingMode<number> = function(n) {
  return roundNearest(n, rounded => !isEven(rounded));
};

export default roundHalfEven;
