// /pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('username', username); // Save login state in localStorage
      router.push('/'); // Redirect to the home page
    }
  };

  return (
    <div className="login-container">
      <h1>Login to CardQuest</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
