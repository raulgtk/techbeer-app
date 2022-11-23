import { describe, it, expect } from "vitest"

const fizzbuzz = (num) => {
  if (typeof num !== 'number') throw new Error()
}

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })
  it('should throw if not number provider', () => {
    expect(() => fizzbuzz()).toThrow(/number/)
  })
})