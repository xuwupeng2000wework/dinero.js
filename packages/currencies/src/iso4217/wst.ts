import { Currency } from "../types/Currency";

/**
 * Samoan tālā
 */
const WST: Currency = {
  name: "tālā",
  sign: {
    default: "WS$",
    alternatives: ["SAT", "ST", "T"]
  },
  code: {
    alpha: "WST",
    num: "882"
  },
  exponent: 2
};

export default WST;
