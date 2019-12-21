/**
 * An arithmetic operation between two entities.
 *
 * @param a The first entity.
 * @param b The first entity.
 *
 * @returns The result of the operation.
 */
type Operation<TType> = (a: TType, b: TType) => TType;

export default Operation;
