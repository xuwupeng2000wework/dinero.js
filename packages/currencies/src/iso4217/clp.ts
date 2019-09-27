import { Currency } from "../types/Currency";

/**
 * Chilean peso
 */
const CLP: Currency = {
  name: "peso",
  sign: {
    default: "$",
    alternatives: ["CLP$"]
  },
  code: {
    alpha: "CLP",
    num: "152"
  },
  exponent: 0
};

export default CLP;
