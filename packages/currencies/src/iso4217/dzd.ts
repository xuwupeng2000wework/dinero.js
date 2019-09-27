import { Currency } from "../types/Currency";

/**
 * Algerian dinar
 */
const DZD: Currency = {
  name: "dinar",
  sign: {
    default: "دج",
    alternatives: ["DA"]
  },
  code: {
    alpha: "DZD",
    num: "012"
  },
  exponent: 2
};

export default DZD;
