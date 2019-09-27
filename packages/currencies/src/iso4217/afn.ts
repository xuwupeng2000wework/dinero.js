import { Currency } from "../types/Currency";

/**
 * Afghan afghani
 */
const AFN: Currency = {
  name: "afghani",
  sign: {
    default: "Afs",
    alternatives: ["AFs"]
  },
  code: {
    alpha: "AFN",
    num: "971"
  },
  exponent: 2
};

export default AFN;
