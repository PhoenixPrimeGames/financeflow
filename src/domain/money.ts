
/**
 * Converts a dollar amount entered as text into integer cents.
 *
 * Returns null when the input is invalid.
 *
 * Examples:
 * "12.50" -> 1250
 * "10"    -> 1000
 * "0.99"  -> 99
 *
 * Only positive amounts with up to two decimal places
 * are accepted.
 */
export function parseAmountToCents(input: string): number | null {
  // Remove accidental spaces at the beginning or end.
  const value = input.trim()

  // Require digits, optionally followed by one or two
  // decimal digits. Reject signs and currency symbols.
  const amountPattern = /^\d+(\.\d{1,2})?$/

  if (!amountPattern.test(value)) {
    return null
  }

  // Separate the whole-dollar and fractional parts.
  const [dollarPart, decimalPart = ''] = value.split('.')

  const dollars = Number(dollarPart)

  // "5" becomes "50", and an empty decimal part becomes "00".
  const cents = Number(decimalPart.padEnd(2, '0'))

  // The whole-dollar portion must be an exact safe integer.
  if (!Number.isSafeInteger(dollars)) {
    return null
  }

  // Prevent calculations from exceeding JavaScript's
  // maximum safe integer value.
  const maxDollars = Math.floor(
    (Number.MAX_SAFE_INTEGER - cents) / 100,
  )

  if (dollars > maxDollars) {
    return null
  }

  const totalCents = dollars * 100 + cents

  // Transactions must have a strictly positive amount.
  if (totalCents <= 0) {
    return null
  }

  return totalCents
}
