import { Currency } from "../types/Currency";

/**
 * Kuwaiti dinar
 */
const KWD: Currency = {
  name: "dinar",
  sign: {
    default: "د.ك",
    alternatives: ["KD"]
  },
  code: {
    alpha: "KWD",
    num: "414"
  },
  exponent: 3
};

export default KWD;
