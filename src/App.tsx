import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Counter from './counter/Counter.tsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        {' | '}
        <NavLink to="/counter">Counter</NavLink>
        {' | '}
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
