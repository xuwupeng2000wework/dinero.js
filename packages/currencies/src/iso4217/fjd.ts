import { Currency } from "../types/Currency";

/**
 * Fiji dollar
 */
const FJD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["FJ$"]
  },
  code: {
    alpha: "FJD",
    num: "242"
  },
  exponent: 2
};

export default FJD;
