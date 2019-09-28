import { Currency } from "../types/Currency";

/**
 * Qatari riyal
 */
const QAR: Currency = {
  name: "riyal",
  sign: {
    default: "ر.ق",
    alternatives: ["QR"]
  },
  code: {
    alpha: "QAR",
    num: "634"
  },
  exponent: 2
};

export default QAR;
