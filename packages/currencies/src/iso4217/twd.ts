import { Currency } from "../types/Currency";

/**
 * New Taiwan dollar
 */
const TWD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["NT$", "圓"]
  },
  code: {
    alpha: "TWD",
    num: "901"
  },
  exponent: 2
};

export default TWD;
