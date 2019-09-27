import { Currency } from "../types/Currency";

/**
 * Canadian dollar
 */
const CAD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["CA$", "Can$", "C$", "CDN$"]
  },
  code: {
    alpha: "CAD",
    num: "124"
  },
  exponent: 2
};

export default CAD;
