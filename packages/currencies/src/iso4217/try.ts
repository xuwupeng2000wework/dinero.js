import { Currency } from "../types/Currency";

/**
 * Turkish lira
 */
const TRY: Currency = {
  name: "lira",
  sign: {
    default: "₺",
    alternatives: ["TL"]
  },
  code: {
    alpha: "TRY",
    num: "949"
  },
  exponent: 2
};

export default TRY;
