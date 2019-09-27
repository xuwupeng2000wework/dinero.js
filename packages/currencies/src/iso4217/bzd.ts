import { Currency } from "../types/Currency";

/**
 * Belize dollar
 */
const BZD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["BZ$"]
  },
  code: {
    alpha: "BZD",
    num: "084"
  },
  exponent: 2
};

export default BZD;
