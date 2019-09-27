import { Currency } from "../types/Currency";

/**
 * Georgian lari
 */
const GEL: Currency = {
  name: "lari",
  sign: {
    default: "₾",
    alternatives: ["ლ"]
  },
  code: {
    alpha: "GEL",
    num: "981"
  },
  exponent: 2
};

export default GEL;
