import { isCategoryForType } from './categories'
/**
 * Defines the supported financial transaction types.
 */
export type TransactionType = 'income' | 'expense'

/**
 * Represents a single financial transaction.
 *
 * Monetary amounts are stored as positive integer cents.
 * Dates use the YYYY-MM-DD format.
 */
export interface Transaction {
  id: string
  date: string
  description: string
  type: TransactionType
  categoryId: string
  amountCents: number
}

/**
 * Represents the data required to create a transaction.
 *
 * The application generates the unique transaction ID.
 */
export type TransactionInput = Omit<Transaction, 'id'>


/**
 * Validation errors are associated with individual
 * transaction fields.
 */
export type TransactionValidationErrors =
  Partial<Record<keyof TransactionInput, string>>

/**
 * Checks whether a value represents a valid calendar date
 * in YYYY-MM-DD format.
 *
 * Leap years and month lengths are checked explicitly
 * to avoid JavaScript date normalization.
 */
export function isValidTransactionDate(value: unknown): boolean {
  if (typeof value !== 'string') {
    return false
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false
  }

  const [year, month, day] = value.split('-').map(Number)

  if (year < 1 || month < 1 || month > 12) {
    return false
  }

  const isLeapYear =
    year % 4 === 0 &&
    (year % 100 !== 0 || year % 400 === 0)

  const daysPerMonth = [
    31,
    isLeapYear ? 29 : 28,
    31, 30, 31, 30,
    31, 31, 30, 31, 30, 31,
  ]

  const maxDay = daysPerMonth[month - 1]

  return maxDay !== undefined && day >= 1 && day <= maxDay
}

/**
 * Validates the fields required to create a transaction.
 *
 * Accepts unknown input so malformed external data
 * cannot bypass runtime validation.
 *
 * Returns an empty object when all fields are valid.
 */
export function validateTransactionInput(
  input: unknown,
): TransactionValidationErrors {
  const errors: TransactionValidationErrors = {}

  // Safely handle null, arrays, and non-object input.
  const data: Record<string, unknown> =
    input !== null &&
    typeof input === 'object' &&
    !Array.isArray(input)
      ? input as Record<string, unknown>
      : {}

  // Validate the calendar date.
  if (!isValidTransactionDate(data.date)) {
    errors.date = 'Enter a valid date (YYYY-MM-DD).'
  }

  // Require a nonempty transaction description.
  if (
    typeof data.description !== 'string' ||
    data.description.trim().length === 0
  ) {
    errors.description = 'Description is required.'
  }

  // Accept only supported transaction types.
  const type = data.type

  if (type !== 'income' && type !== 'expense') {
    errors.type = 'Select income or expense.'
  }

  // Verify that the category belongs to the type.
  if (
    typeof data.categoryId !== 'string' ||
    (type !== 'income' && type !== 'expense') ||
    !isCategoryForType(data.categoryId, type)
  ) {
    errors.categoryId = 'Select a valid category.'
  }

  // Accept only positive, safe integer amounts in cents.
  if (
    typeof data.amountCents !== 'number' ||
    !Number.isSafeInteger(data.amountCents) ||
    data.amountCents <= 0
  ) {
    errors.amountCents = 'Enter a valid positive amount.'
  }

  return errors
}
