import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import CounterDisplay from "./CounterDisplay.tsx";
import CounterIncreaseButton from "./CounterIncreaseButton.tsx";
import CounterDecreaseButton from "./CounterDecreaseButton.tsx";

function Counter() {
  const [count, setCount] = useState(0)

  function handleIncrease() {
    setCount(count + 1)
  }

  function handleDecrease() {
    setCount(count - 1)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button style={{ marginLeft: '1rem' }} onClick={() => setCount(0)}>
          reset
        </button>
        <CounterDisplay counter={count} />
        <CounterIncreaseButton handleIncrease={handleIncrease} />
        <span style={{ marginLeft: '1rem' }}></span>
        <CounterDecreaseButton handleDecrease={handleDecrease} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Counter
