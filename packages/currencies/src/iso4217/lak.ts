import { Currency } from "../types/Currency";

/**
 * Lao kip
 */
const LAK: Currency = {
  name: "kip",
  sign: {
    default: "₭",
    alternatives: ["₭N"]
  },
  code: {
    alpha: "LAK",
    num: "418"
  },
  exponent: 2
};

export default LAK;
