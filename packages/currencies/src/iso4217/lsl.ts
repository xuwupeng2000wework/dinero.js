import { Currency } from "../types/Currency";

/**
 * Lesotho loti
 */
const LSL: Currency = {
  name: "loti",
  sign: {
    default: "L",
    alternatives: ["M"]
  },
  code: {
    alpha: "LSL",
    num: "426"
  },
  exponent: 2
};

export default LSL;
