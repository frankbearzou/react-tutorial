import { Link } from 'react-router'

export function Profile() {
  return (
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="100px" width="100px"  alt="image"/>
  )
}

function About() {
  return (
    <>
      <h1>About ME</h1>
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
      <article>
        <h2>About Me</h2>
        <Profile />
        <Profile />
      </article>
    </>
  )
}

export default About