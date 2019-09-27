import { Currency } from "../types/Currency";

/**
 * Bermudian dollar
 */
const BMD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["BD$"]
  },
  code: {
    alpha: "BMD",
    num: "060"
  },
  exponent: 2
};

export default BMD;
