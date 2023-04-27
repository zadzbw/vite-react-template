import React, { useCallback, useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount((v) => v + 1)
  }, [])

  return (
    <button
      className="rounded-lg border border-transparent bg-gray-100 px-4 py-2 font-medium transition-[border-color] duration-200
                 hover:border-[#646cff]"
      onClick={handleClick}
    >
      count is {count}
    </button>
  )
}
