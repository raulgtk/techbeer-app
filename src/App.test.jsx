import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('TechAndBeer', () => {
  it('should be render', () => {
    render(<App version={1} />)
  })
  it('should display h1', () => {
    render(<App version={1} />)
    screen.getByRole('heading', {level: 1})
  })
  it('should display version', () => {
    render(<App version={1} />)
    screen.getByText(/#1/)
  })
  it('should display logo', () => {
    render(<App version={1} />)
    screen.getByRole('img')
  })
})