// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { useToggle } from '@/hooks'
import { act, renderHook } from '@/test/test-utils'

describe('`useToggle` hooks test', () => {
  it('should get correct value and toggle it', () => {
    const { result } = renderHook(() => useToggle(true))
    const { toggleValue } = result.current

    expect(result.current.value).toBe(true)
    act(() => {
      toggleValue()
    })
    expect(result.current.value).toBe(false)
    act(() => {
      toggleValue()
    })
    expect(result.current.value).toBe(true)
  })
})
