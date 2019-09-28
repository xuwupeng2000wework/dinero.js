import { Currency } from "../types/Currency";

/**
 * Trinidad and Tobago dollar
 */
const TTD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["TT$"]
  },
  code: {
    alpha: "TTD",
    num: "780"
  },
  exponent: 2
};

export default TTD;
