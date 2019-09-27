import { Currency } from "../types/Currency";

/**
 * Renminbi (Chinese) yuan
 */
const CNY: Currency = {
  name: "yuan",
  sign: {
    default: "¥",
    alternatives: ["元"]
  },
  code: {
    alpha: "CNY",
    num: "156"
  },
  exponent: 2
};

export default CNY;
