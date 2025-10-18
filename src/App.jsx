import React, { useState } from 'react';
import app from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Dashboard from './Dashboard';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('🌸 Welcome, dear sister. You are now signed in.');
      navigate('/dashboard');
    } catch (error) {
      setMessage('⚠️ Login failed: ' + error.message);
    }
  };

  return (
    <main className="main">
      <div className="logo-container">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 style={{ marginBottom: '1rem', color: '#333', fontSize: '2rem', fontWeight: '600' }}>
        Ministering Companion
      </h1>

      <p className="spiritual-message">
        Please sign in to access your sacred tools for ministering, encouragement, and spiritual notes.
      </p>

      <div className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Sign In</button>
        <p>{message}</p>
      </div>
    </main>
  );
}

export default App;