import { Currency } from "../types/Currency";

/**
 * Singapore dollar
 */
const SGD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["S$"]
  },
  code: {
    alpha: "SGD",
    num: "702"
  },
  exponent: 2
};

export default SGD;
