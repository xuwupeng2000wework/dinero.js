import { Currency } from "../types/Currency";

/**
 * Guyanese dollar
 */
const GYD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["G$", "GY$"]
  },
  code: {
    alpha: "GYD",
    num: "328"
  },
  exponent: 2
};

export default GYD;
