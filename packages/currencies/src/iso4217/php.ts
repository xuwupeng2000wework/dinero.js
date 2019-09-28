import { Currency } from "../types/Currency";

/**
 * Philippine peso
 */
const PHP: Currency = {
  name: "peso",
  sign: {
    default: "₱",
    alternatives: ["PhP", "Php", "P"]
  },
  code: {
    alpha: "PHP",
    num: "608"
  },
  exponent: 2
};

export default PHP;
