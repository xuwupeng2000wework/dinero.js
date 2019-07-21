import countFractionDigits from '../countFractionDigits'

describe('#countFractionDigits', () => {
  test('should return the right amount as a number when a float is passed', () => {
    expect(countFractionDigits(8.61)).toBe(2)
  })
  test('should return 0 when an integer is passed', () => {
    expect(countFractionDigits(8)).toBe(0)
  })
})
