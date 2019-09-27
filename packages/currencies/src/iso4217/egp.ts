import { Currency } from "../types/Currency";

/**
 * Egyptian pound
 */
const EGP: Currency = {
  name: "pound",
  sign: {
    default: "E£",
    alternatives: ["£E", "ج.م", "L.E."]
  },
  code: {
    alpha: "EGP",
    num: "818"
  },
  exponent: 2
};

export default EGP;
