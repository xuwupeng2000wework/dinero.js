import { Currency } from "../types/Currency";

/**
 * Bahraini dinar
 */
const BHD: Currency = {
  name: "dinar",
  sign: {
    default: ".د.ب",
    alternatives: ["BD"]
  },
  code: {
    alpha: "BHD",
    num: "048"
  },
  exponent: 3
};

export default BHD;
