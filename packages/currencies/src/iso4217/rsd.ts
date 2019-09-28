import { Currency } from "../types/Currency";

/**
 * Serbian dinar
 */
const RSD: Currency = {
  name: "dinar",
  sign: {
    default: "дин",
    alternatives: ["din"]
  },
  code: {
    alpha: "RSD",
    num: "941"
  },
  exponent: 2
};

export default RSD;
