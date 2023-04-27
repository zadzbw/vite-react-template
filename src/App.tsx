import React from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import { Counter } from '@/components/Counter'
import '@/App.scss'

export default function App() {
  return (
    <div className="flex-center min-h-screen min-w-[320px]">
      <div className="space-y-12 text-center">
        <div className="flex justify-center">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-5xl font-bold">Vite + React</h1>
        <div>
          <Counter />
          <p className="my-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-500">Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  )
}
