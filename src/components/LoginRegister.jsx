import { useState, useEffect } from 'react';
import '../style.css'
import { apiBaseLogin } from './apibase';

const API_BASE = apiBaseLogin

export default function LoginRegister({ onLoggedIn }) {
  const [mode, setMode] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!username || !password) {
      setStatus({ ok: false, message: 'Enter a username and password.' });
      return;
    }

    const path = mode === 'login' ? '/user/login' : '/user/register';

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}${path}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          ok: true,
          message: mode === 'login' ? 'Logged in successfully.' : 'Registered successfully. You can log in now.',
        });
        if (mode === 'register') setMode('login');
        if (mode === 'login') onLoggedIn();
      } else {
        setStatus({ ok: false, message: data.error || 'Request failed.' });
      }
    } catch (err) {
      setStatus({ ok: false, message: `Network error: ${err.message}` });
    } finally {
      setLoading(false);
    }
  }

  async function checkSession() {
    setStatus(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/user/`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      onLoggedIn();
      setStatus({
        ok: res.ok,
        message: res.ok ? `Session valid: ${data}` : data.error || 'Not logged in.',
      });
    } catch (err) {
      setStatus({ ok: false, message: `Network error: ${err.message}` });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center bg-white px-4 py-12 mt-16">
      <div className="w-full max-w-sm rounded-md border border-solid border-black bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          {mode === 'login' ? 'Log In' : 'Register'}
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="mt-3 block text-sm font-semibold text-gray-800">
            Username
            <input
              className="mt-1 block w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-black"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </label>

          <label className="mt-3 block text-sm font-semibold text-gray-800">
            Password
            <input
              className="mt-1 block w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-black"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            />
          </label>

          <button
            type="submit"
            className="mt-4 w-full rounded-md border border-solid border-black bg-white py-2 text-sm text-gray-800 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Please wait…' : mode === 'login' ? 'Log In' : 'Register'}
          </button>
        </form>

        <button
          className="mt-3 block w-full bg-white text-center text-xs text-gray-800 underline hover:bg-gray-200 rounded-md"
          onClick={() => {
            setMode(mode === 'login' ? 'register' : 'login');
            setStatus(null);
          }}
        >
          {mode === 'login' ? 'Need an account? Register' : 'Already have an account? Log in'}
        </button>

        <button
          className="mt-2 w-full rounded-md border border-solid border-black bg-white py-2 text-sm text-gray-800 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={checkSession}
          disabled={loading}
        >
          Check current session
        </button>

        {status && (
          <p
            className={`mt-3 text-sm ${status.ok ? 'text-green-700' : 'text-red-700'}`}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
}