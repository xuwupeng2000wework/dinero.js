import { Currency } from "../types/Currency";

/**
 * Russian ruble
 */
const RUB: Currency = {
  name: "ruble",
  sign: {
    default: "₽",
    alternatives: ["руб", "р."]
  },
  code: {
    alpha: "RUB",
    num: "643"
  },
  exponent: 2
};

export default RUB;
