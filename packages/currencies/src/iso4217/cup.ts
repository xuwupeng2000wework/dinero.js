import { Currency } from "../types/Currency";

/**
 * Cuban peso
 */
const CUP: Currency = {
  name: "peso",
  sign: {
    default: "$",
    alternatives: ["$MN", "₱"]
  },
  code: {
    alpha: "CUP",
    num: "192"
  },
  exponent: 2
};

export default CUP;
