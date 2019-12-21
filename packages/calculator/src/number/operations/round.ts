import RoundingMode from "../../types/RoundingMode";
import roundHalfEven from "../rounding-modes/roundHalfEven";

const round: (
  n: number,
  roundingMode?: RoundingMode<number>
) => number = function(n, roundingMode = roundHalfEven) {
  return roundingMode(n);
};

export default round;
