import { Currency } from "../types/Currency";

/**
 * Cayman Islands dollar
 */
const KYD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["CI$"]
  },
  code: {
    alpha: "KYD",
    num: "136"
  },
  exponent: 2
};

export default KYD;
