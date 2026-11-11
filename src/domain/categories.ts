
import type { TransactionType } from './transaction'

/**
 * Represents a predefined transaction category.
 */
export interface Category {
  id: string
  label: string
  type: TransactionType
}

/**
 * Categories supported by FinanceFlow.
 *
 * Category IDs are stable identifiers used in stored transactions.
 * Labels are intended for display in the user interface.
 */
export const CATEGORIES: ReadonlyArray<Category> = [
  // Income categories
  { id: 'salary', label: 'Salary', type: 'income' },
  { id: 'freelance', label: 'Freelance', type: 'income' },
  { id: 'gifts', label: 'Gifts', type: 'income' },
  { id: 'other-income', label: 'Other Income', type: 'income' },

  // Expense categories
  { id: 'housing', label: 'Housing', type: 'expense' },
  { id: 'groceries', label: 'Groceries', type: 'expense' },
  { id: 'transportation', label: 'Transportation', type: 'expense' },
  { id: 'utilities', label: 'Utilities', type: 'expense' },
  { id: 'dining', label: 'Dining', type: 'expense' },
  { id: 'entertainment', label: 'Entertainment', type: 'expense' },
  { id: 'healthcare', label: 'Healthcare', type: 'expense' },
  { id: 'other-expense', label: 'Other Expense', type: 'expense' },
]

/**
 * Returns categories belonging to the specified transaction type.
 */
export function getCategoriesForType(
  type: TransactionType,
): Category[] {
  return CATEGORIES.filter((category) => category.type === type)
}

/**
 * Checks whether a category ID belongs to the specified
 * transaction type.
 */
export function isCategoryForType(
  categoryId: string,
  type: TransactionType,
): boolean {
  return CATEGORIES.some(
    (category) =>
      category.id === categoryId && category.type === type,
  )
}
