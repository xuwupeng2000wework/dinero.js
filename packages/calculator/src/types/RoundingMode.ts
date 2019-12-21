/**
 * A rounding function.
 *
 * @param n The entity to round.
 *
 * @returns The rounded entity.
 */
type RoundingMode<TType> = (n: TType) => TType;

export default RoundingMode;
