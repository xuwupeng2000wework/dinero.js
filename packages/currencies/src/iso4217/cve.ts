import { Currency } from "../types/Currency";

/**
 * Cape Verdean escudo
 */
const CVE: Currency = {
  name: "escudo",
  sign: {
    default: "$",
    alternatives: ["Esc"]
  },
  code: {
    alpha: "CVE",
    num: "132"
  },
  exponent: 2
};

export default CVE;
