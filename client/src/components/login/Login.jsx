import { useState } from "react";
import useMutationRequest from "../../hooks/useMutate.js";
import "./Login.css"; 

export default function Login() {
  const defaultUrl = 'http://localhost:3030/users/login'

  const [email, setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, loading, error, data } = useMutationRequest(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      username,
      password,
    };

    await mutate(defaultUrl, "POST", loginData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Golf Club Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {data && <p>Welcome, {username}!</p>} {/* Display user data on successful login */}
      </div>
    </div>
  );
}
