import { Currency } from "../types/Currency";

/**
 * Guinean franc
 */
const GNF: Currency = {
  name: "franc",
  sign: {
    default: "FG",
    alternatives: ["Fr", "GFr"]
  },
  code: {
    alpha: "GNF",
    num: "324"
  },
  exponent: 0
};

export default GNF;
