import { Currency } from "../types/Currency";

/**
 * Ghanaian cedi
 */
const GHS: Currency = {
  name: "cedi",
  sign: {
    default: "GH₵",
    alternatives: ["GH¢"]
  },
  code: {
    alpha: "GHS",
    num: "936"
  },
  exponent: 2
};

export default GHS;
