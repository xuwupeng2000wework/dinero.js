import { Currency } from "../types/Currency";

/**
 * Tongan paʻanga
 */
const TOP: Currency = {
  name: "paʻanga",
  sign: {
    default: "T$",
    alternatives: ["PT"]
  },
  code: {
    alpha: "TOP",
    num: "776"
  },
  exponent: 2
};

export default TOP;
