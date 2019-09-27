import { Currency } from "../types/Currency";

/**
 * Uruguayan peso
 */
const UYU: Currency = {
  name: "peso",
  sign: {
    default: "$",
    alternatives: ["$U"]
  },
  code: {
    alpha: "UYU",
    num: "858"
  },
  exponent: 2
};

export default UYU;
