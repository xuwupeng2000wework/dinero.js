import { Currency } from "../types/Currency";

/**
 * Ethiopian birr
 */
const ETB: Currency = {
  name: "birr",
  sign: {
    default: "ብር",
    alternatives: ["Br"]
  },
  code: {
    alpha: "ETB",
    num: "230"
  },
  exponent: 2
};

export default ETB;
