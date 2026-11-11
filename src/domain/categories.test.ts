
import { describe, expect, it } from 'vitest'
import {
  getCategoriesForType,
  isCategoryForType,
} from './categories'

/**
 * Tests the predefined category system.
 *
 * These tests verify that income and expense categories
 * are separated and validated correctly.
 */
describe('Transaction categories', () => {
  /**
   * Income transactions should only display income categories.
   */
  it('returns the correct income categories', () => {
    const categories = getCategoriesForType('income')

    expect(categories).toHaveLength(4)

    expect(
      categories.every((category) => category.type === 'income'),
    ).toBe(true)

    expect(
      categories.map((category) => category.id),
    ).toContain('salary')
  })

  /**
   * Expense transactions should only display expense categories.
   */
  it('returns the correct expense categories', () => {
    const categories = getCategoriesForType('expense')

    expect(categories).toHaveLength(8)

    expect(
      categories.every((category) => category.type === 'expense'),
    ).toBe(true)

    expect(
      categories.map((category) => category.id),
    ).toContain('groceries')
  })

  /**
   * Categories belonging to a transaction type are valid.
   */
  it('accepts matching category and transaction types', () => {
    expect(isCategoryForType('salary', 'income')).toBe(true)

    expect(isCategoryForType('groceries', 'expense')).toBe(true)
  })

  /**
   * Categories cannot be assigned to the wrong transaction type.
   */
  it('rejects mismatched category and transaction types', () => {
    expect(isCategoryForType('salary', 'expense')).toBe(false)

    expect(isCategoryForType('groceries', 'income')).toBe(false)
  })

  /**
   * Unknown category identifiers must be rejected.
   */
  it('rejects unknown categories', () => {
    expect(isCategoryForType('invalid', 'income')).toBe(false)

    expect(isCategoryForType('', 'expense')).toBe(false)
  })
})
