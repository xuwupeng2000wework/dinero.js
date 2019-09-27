import { Currency } from "../types/Currency";

/**
 * Barbados dollar
 */
const BBD: Currency = {
  name: "dollar",
  sign: {
    default: "$",
    alternatives: ["Bds$"]
  },
  code: {
    alpha: "BBD",
    num: "052"
  },
  exponent: 2
};

export default BBD;
