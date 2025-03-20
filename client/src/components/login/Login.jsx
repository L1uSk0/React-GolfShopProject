import { useState } from "react";
// import useMutationRequest from "../../hooks/useMutate.js";
import "./Login.module.css"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, loading, error, data } = useMutationRequest(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);

    // Prepare login data
    const loginData = {
      email,
      password,
    };

    // Call the mutate function with the login endpoint
    await mutate("https://your-api-url/login", "POST", loginData);
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
        {data && <p>Welcome, {data.user.name}!</p>} {/* Display user data on successful login */}
      </div>
    </div>
  );
}
