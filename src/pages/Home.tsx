import { Link } from 'react-router'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Home() {
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
        <p>Welcome to the React Tutorial project.</p>
        <p>
          <Link to="/counter">Go to Counter</Link>
          {' | '}
          <Link to="/about">About</Link>
        </p>
      </div>
    </>
  )
}

export default Home