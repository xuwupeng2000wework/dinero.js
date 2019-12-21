/**
 * Types
 */
export { default as Calculator, Operation, RoundingMode } from "./types";

/**
 * Number calculator
 */
export {
  calculator as numberCalculator,
  round as numberRound,
  roundHalfOdd as numberRoundHalfOdd,
  roundHalfEven as numberRoundHalfEven,
  roundHalfUp as numberRoundHalfUp,
  roundHalfDown as numberRoundHalfDown,
  roundHalfTowardsZero as numberRoundHalfTowardsZero,
  roundHalfAwayFromZero as numberRoundHalfAwayFromZero,
  roundDown as numberRoundDown
} from "./number";
