import { Currency } from "../types/Currency";

/**
 * Namibian dollar
 */
const NAD: Currency = {
  name: "dollar",
  sign: {
    default: "N$",
    alternatives: ["N$"]
  },
  code: {
    alpha: "NAD",
    num: "516"
  },
  exponent: 2
};

export default NAD;
