// @vitest-environment jsdom
import React from 'react'
import { describe, it, expect } from 'vitest'
import { act, render, screen, userEvent } from '@/test/test-utils'
import { Counter } from '../Counter'

describe('`Counter` component test', () => {
  it('should render with initial value', async () => {
    render(<Counter />)
    const el = screen.getByRole('button')

    expect(el).toBeInTheDocument()
    expect(el).toHaveTextContent('count is 0')
  })

  it('should increment count on click', async () => {
    render(<Counter />)
    const el = screen.getByRole('button')

    // click
    act(() => {
      el.click()
    })
    expect(el).toHaveTextContent('count is 1')
    // click
    await userEvent.click(el)
    expect(el).toHaveTextContent('count is 2')
  })
})
