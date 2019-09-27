import { Currency } from "../types/Currency";

/**
 * Libyan dinar
 */
const LYD: Currency = {
  name: "dinar",
  sign: {
    default: "ل.د",
    alternatives: ["LD"]
  },
  code: {
    alpha: "LYD",
    num: "434"
  },
  exponent: 3
};

export default LYD;
