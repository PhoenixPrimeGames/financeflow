
import { describe, expect, it } from 'vitest'

describe('FinanceFlow testing environment', () => {
  it('correctly adds integer monetary values', () => {
    const amountCents = 12575
    const additionalCents = 25

    const totalCents = amountCents + additionalCents

    expect(totalCents).toBe(12600)
  })
})
