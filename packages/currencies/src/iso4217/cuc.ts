import { Currency } from "../types/Currency";

/**
 * Cuban convertible peso
 */
const CUC: Currency = {
  name: "peso",
  sign: {
    default: "$",
    alternatives: ["CUC$"]
  },
  code: {
    alpha: "CUC",
    num: "931"
  },
  exponent: 2
};

export default CUC;
