import { Currency } from "../types/Currency";

/**
 * Maldivian rufiyaa
 */
const MVR: Currency = {
  name: "rufiyaa",
  sign: {
    default: "Rf",
    alternatives: ["MRf"]
  },
  code: {
    alpha: "MVR",
    num: "462"
  },
  exponent: 2
};

export default MVR;
