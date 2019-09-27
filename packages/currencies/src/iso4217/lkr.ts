import { Currency } from "../types/Currency";

/**
 * Sri Lankan rupee
 */
const LKR: Currency = {
  name: "rupee",
  sign: {
    default: "රු",
    alternatives: ["ரூ", "Rs"]
  },
  code: {
    alpha: "LKR",
    num: "144"
  },
  exponent: 2
};

export default LKR;
