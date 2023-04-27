import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <button className="rounded-lg" onClick={() => setCount((v) => v + 1)}>
      count is {count}
    </button>
  )
}
