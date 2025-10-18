import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main style={{padding: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6'}}>h
    <h1>Ministering Companion</h1>
    <p>Welcome, dear sisters. This sacred tool is here to support your service, uplift your heart, and unify your ward family.</p>
    <ul>
        <li>Secure login for ministering sisters</li>
        <li>Visit logging and spiritual notes</li>
        <li>Reminder schedule</li>
        <li>Resource sharing and  encouragement</li>
    </ul>
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
    </>
  )
}

export default App
