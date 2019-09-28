import { Currency } from "../types/Currency";

/**
 * Solomon Islands dollar
 */
const SBD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["SI$"]
  },
  code: {
    alpha: "SBD",
    num: "090"
  },
  exponent: 2
};

export default SBD;
