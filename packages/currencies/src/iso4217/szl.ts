import { Currency } from "../types/Currency";

/**
 * Swazi lilangeni
 */
const SZL: Currency = {
  name: "lilangeni",
  sign: {
    default: "L",
    alternatives: ["E"]
  },
  code: {
    alpha: "SZL",
    num: "748"
  },
  exponent: 2
};

export default SZL;
