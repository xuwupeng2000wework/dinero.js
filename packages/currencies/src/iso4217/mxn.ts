import { Currency } from "../types/Currency";

/**
 * Mexican peso
 */
const MXN: Currency = {
  name: "peso",
  sign: {
    default: "$",
    alternatives: ["Mex$"]
  },
  code: {
    alpha: "MXN",
    num: "484"
  },
  exponent: 2
};

export default MXN;
