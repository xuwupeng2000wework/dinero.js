export type Currency = {
  name: string
  sign?: string | {
    default: string;
    alternatives: string[];
  }
  code: {
    alpha: string;
    num?: string;
  }
  exponent: number
}
