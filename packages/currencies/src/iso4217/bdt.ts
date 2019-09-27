import { Currency } from "../types/Currency";

/**
 * Bangladeshi taka
 */
const BDT: Currency = {
  name: "taka",
  sign: {
    default: "৳",
    alternatives: ["Tk"]
  },
  code: {
    alpha: "BDT",
    num: "050"
  },
  exponent: 2
};

export default BDT;
