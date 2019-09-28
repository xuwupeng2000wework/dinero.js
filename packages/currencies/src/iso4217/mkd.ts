import { Currency } from "../types/Currency";

/**
 * Macedonian denar
 */
const MKD: Currency = {
  name: "denar",
  sign: {
    default: "ден",
    alternatives: ["den"]
  },
  code: {
    alpha: "MKD",
    num: "807"
  },
  exponent: 2
};

export default MKD;
