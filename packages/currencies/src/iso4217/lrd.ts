import { Currency } from "../types/Currency";

/**
 * Liberian dollar
 */
const LRD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["L$", "LD$"]
  },
  code: {
    alpha: "LRD",
    num: "430"
  },
  exponent: 2
};

export default LRD;
