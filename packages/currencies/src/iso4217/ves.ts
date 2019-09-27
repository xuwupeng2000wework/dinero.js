import { Currency } from "../types/Currency";

/**
 * Venezuelan bolívar
 */
const VES: Currency = {
  name: "bolívar",
  sign: {
    default: "Bs.F.",
    alternatives: ["Bs."]
  },
  code: {
    alpha: "VES",
    num: "928"
  },
  exponent: 2
};

export default VES;
