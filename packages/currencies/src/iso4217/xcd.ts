import { Currency } from "../types/Currency";

/**
 * East Caribbean dollar
 */
const XCD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["EC$"]
  },
  code: {
    alpha: "XCD",
    num: "951"
  },
  exponent: 2
};

export default XCD;
