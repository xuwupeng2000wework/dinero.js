import { Currency } from "../types/Currency";

/**
 * Bahamian dollar
 */
const BSD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["B$"]
  },
  code: {
    alpha: "BSD",
    num: "044"
  },
  exponent: 2
};

export default BSD;
