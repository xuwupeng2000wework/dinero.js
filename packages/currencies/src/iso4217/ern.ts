import { Currency } from "../types/Currency";

/**
 * Eritrean nakfa
 */
const ERN: Currency = {
  name: "nakfa",
  sign: {
    default: "ናቕፋ",
    alternatives: ["Nkf", "ناكفا"]
  },
  code: {
    alpha: "ERN",
    num: "232"
  },
  exponent: 2
};

export default ERN;
