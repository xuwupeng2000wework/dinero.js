import { Currency } from "../types/Currency";

/**
 * Hong Kong dollar
 */
const HKD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["HK$", "元"]
  },
  code: {
    alpha: "HKD",
    num: "344"
  },
  exponent: 2
};

export default HKD;
