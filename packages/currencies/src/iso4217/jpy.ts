import { Currency } from "../types/Currency";

/**
 * Japanese yen
 */
const JPY: Currency = {
  name: "yen",
  sign: {
    default: "¥",
    alternatives: ["円", "圓"]
  },
  code: {
    alpha: "JPY",
    num: "392"
  },
  exponent: 0
};

export default JPY;
