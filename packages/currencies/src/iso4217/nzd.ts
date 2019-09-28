import { Currency } from "../types/Currency";

/**
 * New Zealand dollar
 */
const NZD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["NZ$"]
  },
  code: {
    alpha: "NZD",
    num: "554"
  },
  exponent: 2
};

export default NZD;
