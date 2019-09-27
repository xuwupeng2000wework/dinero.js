import { Currency } from "../types/Currency";

/**
 * Colombian peso
 */
const COP: Currency = {
  name: "peso",
  sign: {
    default: "$",
    alternatives: ["COL$"]
  },
  code: {
    alpha: "COP",
    num: "170"
  },
  exponent: 2
};

export default COP;
