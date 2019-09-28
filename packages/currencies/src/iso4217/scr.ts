import { Currency } from "../types/Currency";

/**
 * Seychelles rupee
 */
const SCR: Currency = {
  name: "rupee",
  sign: {
    default: "SR",
    alternatives: ["SRe"]
  },
  code: {
    alpha: "SCR",
    num: "690"
  },
  exponent: 2
};

export default SCR;
