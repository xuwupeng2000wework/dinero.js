import { Currency } from "../types/Currency";

/**
 * Nepalese rupee
 */
const NPR: Currency = {
  name: "rupee",
  sign: {
    default: "रू",
    alternatives: ["Rs.", "Re."]
  },
  code: {
    alpha: "NPR",
    num: "524"
  },
  exponent: 2
};

export default NPR;
