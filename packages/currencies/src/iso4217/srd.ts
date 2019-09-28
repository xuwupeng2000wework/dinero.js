import { Currency } from "../types/Currency";

/**
 * Surinamese dollar
 */
const SRD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["Sr$"]
  },
  code: {
    alpha: "SRD",
    num: "968"
  },
  exponent: 2
};

export default SRD;
