import { Currency } from "../types/Currency";

/**
 * Jamaican dollar
 */
const JMD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["J$"]
  },
  code: {
    alpha: "JMD",
    num: "388"
  },
  exponent: 2
};

export default JMD;
