import { Currency } from "../types/Currency";

/**
 * Kenyan shilling
 */
const KES: Currency = {
  name: "shilling",
  sign: {
    default: "KSh",
    alternatives: ["/=", "/-", "K"]
  },
  code: {
    alpha: "KES",
    num: "404"
  },
  exponent: 2
};

export default KES;
