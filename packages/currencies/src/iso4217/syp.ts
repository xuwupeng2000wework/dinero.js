import { Currency } from "../types/Currency";

/**
 * Syrian pound
 */
const SYP: Currency = {
  name: "pound",
  sign: {
    default: "£S",
    alternatives: ["LS"]
  },
  code: {
    alpha: "SYP",
    num: "760"
  },
  exponent: 2
};

export default SYP;
