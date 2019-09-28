import { Currency } from "../types/Currency";

/**
 * Ukrainian hryvnia
 */
const UAH: Currency = {
  name: "hryvnia",
  sign: {
    default: "₴",
    alternatives: ["грн"]
  },
  code: {
    alpha: "UAH",
    num: "980"
  },
  exponent: 2
};

export default UAH;
