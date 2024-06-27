import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './images/logo.png'
import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='site_block'>
        <header className='header'>
          <div className='title'>
            <img className='logo_photo' src={logo}></img>
            <h2 className='club_name'>Alberta Bionix</h2>
          </div>
          <div className='links'>
            <a>Home</a>
            <a>Projects</a>
            <a>Contact</a>
            <img className='insta' src={instagram}></img>
            <img className='linkedin' src={linkedin}></img>
          </div>
        </header>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  )
}

export default App
