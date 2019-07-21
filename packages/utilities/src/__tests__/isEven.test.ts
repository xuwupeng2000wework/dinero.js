import isEven from '../isEven'

describe('#isEven', () => {
  test('should return true for a positive even integer', () => {
    expect(isEven(202)).toBe(true)
  })
  test('should return true for a negative even integer', () => {
    expect(isEven(-202)).toBe(true)
  })
  test('should return false for a positive odd integer', () => {
    expect(isEven(101)).toBe(false)
  })
  test('should return false for a negative odd integer', () => {
    expect(isEven(-101)).toBe(false)
  })
})
