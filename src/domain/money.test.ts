
import { describe, expect, it } from 'vitest'
import { parseAmountToCents } from './money'

/**
 * Tests monetary input conversion and validation.
 */
describe('Monetary input conversion', () => {
  it('converts whole dollar amounts', () => {
    expect(parseAmountToCents('25')).toBe(2500)
  })

  it('converts amounts with two decimal places', () => {
    expect(parseAmountToCents('125.75')).toBe(12575)
  })

  it('converts amounts with one decimal place', () => {
    expect(parseAmountToCents('12.5')).toBe(1250)
  })

  it('accepts the smallest positive cent amount', () => {
    expect(parseAmountToCents('0.01')).toBe(1)
  })

  it('removes surrounding whitespace', () => {
    expect(parseAmountToCents(' 25.50 ')).toBe(2550)
  })

  it('rejects zero and negative amounts', () => {
    expect(parseAmountToCents('0')).toBeNull()
    expect(parseAmountToCents('0.00')).toBeNull()
    expect(parseAmountToCents('-10.00')).toBeNull()
  })

  it('rejects more than two decimal places', () => {
    expect(parseAmountToCents('12.999')).toBeNull()
  })

  it('rejects malformed monetary input', () => {
    expect(parseAmountToCents('')).toBeNull()
    expect(parseAmountToCents('abc')).toBeNull()
    expect(parseAmountToCents('$25.00')).toBeNull()
    expect(parseAmountToCents('1,000.00')).toBeNull()
    expect(parseAmountToCents('1e3')).toBeNull()
  })

  it('rejects amounts exceeding safe integer limits', () => {
    expect(
      parseAmountToCents('9007199254740992'),
    ).toBeNull()
  })
})
