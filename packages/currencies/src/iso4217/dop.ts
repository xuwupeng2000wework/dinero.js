import { Currency } from "../types/Currency";

/**
 * Dominican peso
 */
const DOP: Currency = {
  name: "peso",
  sign: {
    default: "$",
    alternatives: ["RD$"]
  },
  code: {
    alpha: "DOP",
    num: "214"
  },
  exponent: 2
};

export default DOP;
