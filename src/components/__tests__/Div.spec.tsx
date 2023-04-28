// @vitest-environment jsdom
import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test/test-utils'

describe('tailwind test', () => {
  it('should render with correct style', () => {
    render(
      <div id="div" className="m-4 flex border-transparent">
        test
      </div>,
    )
    const div = screen.getByText(/test/i)

    expect(getComputedStyle(div).borderColor).toEqual('transparent')
    expect(getComputedStyle(div).display).toEqual('flex')
    expect(getComputedStyle(div).margin).toEqual('1rem')
  })
})
