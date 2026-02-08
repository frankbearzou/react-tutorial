import { useState } from 'react'
import { Link } from 'react-router'
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
      <h1>Counter</h1>
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
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/about">About</Link>
        </p>
      </div>
    </>
  )
}

export default Counter
