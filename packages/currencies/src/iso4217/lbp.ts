import { Currency } from "../types/Currency";

/**
 * Lebanese pound
 */
const LBP: Currency = {
  name: "pound",
  sign: {
    default: "ل.ل.‎",
    alternatives: ["LL"]
  },
  code: {
    alpha: "LBP",
    num: "422"
  },
  exponent: 2
};

export default LBP;
