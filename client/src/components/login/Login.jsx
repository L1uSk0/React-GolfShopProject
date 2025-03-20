import { useState } from "react";
import "./Login.css"; 
import { useNavigate } from "react-router";
import { useLogin } from "../../api/authApi.js";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, loading, error } = useLogin(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        await login(email,password);
        navigate("/")
    } catch (err) {
        console.error("Login failed:", err);
    }
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
      </div>
    </div>
  );
}
