
import { describe, expect, it } from 'vitest'
import {
  isValidTransactionDate,
  validateTransactionInput,
} from './transaction'
import type { TransactionInput } from './transaction'

/**
 * A fictional, valid transaction used as the baseline
 * for testing individual invalid fields.
 */
const validTransaction: TransactionInput = {
  date: '2026-11-10',
  description: 'Groceries',
  type: 'expense',
  categoryId: 'groceries',
  amountCents: 12575,
}

describe('Transaction validation', () => {
  it('accepts a valid transaction', () => {
    expect(validateTransactionInput(validTransaction)).toEqual({})
  })

  it('accepts valid leap-year dates', () => {
    expect(isValidTransactionDate('2024-02-29')).toBe(true)
    expect(isValidTransactionDate('2025-02-29')).toBe(false)
  })

  it('rejects invalid calendar dates', () => {
    expect(isValidTransactionDate('2026-04-31')).toBe(false)
    expect(isValidTransactionDate('2026-13-01')).toBe(false)
    expect(isValidTransactionDate('2026-11-00')).toBe(false)
    expect(isValidTransactionDate('0000-01-01')).toBe(false)
    expect(isValidTransactionDate('11/10/2026')).toBe(false)
  })

  it('requires a nonempty description', () => {
    const result = validateTransactionInput({
      ...validTransaction,
      description: '   ',
    })

    expect(result.description).toBeDefined()
  })

  it('rejects mismatched or unknown categories', () => {
    const mismatched = validateTransactionInput({
      ...validTransaction,
      categoryId: 'salary',
    })

    const unknown = validateTransactionInput({
      ...validTransaction,
      categoryId: 'unknown',
    })

    expect(mismatched.categoryId).toBeDefined()
    expect(unknown.categoryId).toBeDefined()
  })

  it('rejects unsupported transaction types', () => {
    const result = validateTransactionInput({
      ...validTransaction,
      type: 'transfer',
    })

    expect(result.type).toBeDefined()
  })

  it('rejects invalid amounts in cents', () => {
    for (const amount of [0, -100, 12.5, Infinity, NaN]) {
      const result = validateTransactionInput({
        ...validTransaction,
        amountCents: amount,
      })

      expect(result.amountCents).toBeDefined()
    }
  })

  it('handles malformed transaction data safely', () => {
    const result = validateTransactionInput(null)

    expect(result.date).toBeDefined()
    expect(result.description).toBeDefined()
    expect(result.type).toBeDefined()
    expect(result.categoryId).toBeDefined()
    expect(result.amountCents).toBeDefined()
  })
})
