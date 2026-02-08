import { Link } from 'react-router'

function About() {
  return (
    <>
      <h1>About</h1>
      <div className="card">
        <p>
          This is a React tutorial project built with Vite, React 19, and TypeScript.
        </p>
        <p>
          It demonstrates component composition, state management, and routing.
        </p>
        <p>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/counter">Go to Counter</Link>
        </p>
      </div>
    </>
  )
}

export default About