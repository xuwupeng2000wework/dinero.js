import { Currency } from "../types/Currency";

/**
 * Mozambican metical
 */
const MZN: Currency = {
  name: "metical",
  sign: {
    default: "MT",
    alternatives: ["MTn"]
  },
  code: {
    alpha: "MZN",
    num: "943"
  },
  exponent: 2
};

export default MZN;
