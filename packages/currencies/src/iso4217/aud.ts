import { Currency } from "../types/Currency";

/**
 * Australian dollar
 */
const AUD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["A$", "AU$"]
  },
  code: {
    alpha: "AUD",
    num: "036"
  },
  exponent: 2
};

export default AUD;
