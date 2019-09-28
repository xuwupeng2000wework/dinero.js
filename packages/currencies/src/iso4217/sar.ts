import { Currency } from "../types/Currency";

/**
 * Saudi riyal
 */
const SAR: Currency = {
  name: "riyal",
  sign: {
    default: "ر.س",
    alternatives: ["﷼"]
  },
  code: {
    alpha: "SAR",
    num: "682"
  },
  exponent: 2
};

export default SAR;
