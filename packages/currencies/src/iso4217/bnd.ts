import { Currency } from "../types/Currency";

/**
 * Brunei dollar
 */
const BND: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["B$"]
  },
  code: {
    alpha: "BND",
    num: "096"
  },
  exponent: 2
};

export default BND;
