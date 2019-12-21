import Operation from './Operation'
import RoundingMode from './RoundingMode'

export default interface Calculator<TType> {
  /**
   * Returns the sum of two entities.
   *
   * @param a The first addend.
   * @param b The second addend.
   *
   * @returns The sum of the two entities.
   */
  readonly add: Operation<TType>
  /**
   * Returns the difference between two entities.
   *
   * @param a The first subtrahend.
   * @param b The second subtrahend.
   *
   * @returns The difference between the two entities.
   */
  readonly subtract: Operation<TType>
  /**
   * Returns the product of two entities.
   *
   * @param a The first multiplier.
   * @param b The second multiplier.
   *
   * @returns The product of the two entities.
   */
  readonly multiply: Operation<TType>
  /**
   * Returns the quotient of two entities.
   *
   * @param a The first divisor.
   * @param b The second divisor.
   *
   * @returns The quotient of the two entities.
   */
  readonly divide: Operation<TType>
  /**
   * Returns the remainder of two entities.
   *
   * @param a The first divisor.
   * @param b The second divisor.
   *
   * @returns The remainder of the two entities.
   */
  readonly modulo: Operation<TType>
  /**
   * Returns a rounded entity based off a specific rounding mode.
   *
   * @param n The entity to round.
   * @param roundingMode The rounding mode to use.
   *
   * @returns The rounded entity based off a specific rounding mode.
   */
  readonly round?: (n: TType, roundingMode: RoundingMode<TType>) => TType
}
