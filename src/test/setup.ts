import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import '@/style/index.scss'

afterEach(() => {
  cleanup()
})
