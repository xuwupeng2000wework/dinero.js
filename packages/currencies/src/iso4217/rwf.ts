import { Currency } from "../types/Currency";

/**
 * Rwandan franc
 */
const RWF: Currency = {
  name: "franc",
  sign: {
    default: "FRw",
    alternatives: ["RF", "R₣"]
  },
  code: {
    alpha: "RWF",
    num: "646"
  },
  exponent: 0
};

export default RWF;
