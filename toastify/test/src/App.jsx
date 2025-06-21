import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {ToastContainer, toast} from 'react-toastify'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Practice from './Practice'

function App() {
  const [count, setCount] = useState(0)
  const notify = () => toast("Wow so easy!")
  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to='/toast'>Toast Practice</Link>
    </nav>

    <Routes>
      <Route path='/toast' element={<Practice/>}/>
    </Routes>
    
    </BrowserRouter>
  
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer/>
      </div>
    </>
  )
}

export default App
