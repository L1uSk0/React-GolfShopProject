import "./Login.css";

import { useNavigate, Link, } from "react-router";
import { useLogin } from "../../api/authApi.js";
import { UserContext } from "../../contexts/UserContext.jsx";
import { useActionState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const { userLoginHandler } = useContext(UserContext);
  const { login } = useLogin();

  const loginHandler = async (_, formData) => {
    try {
      const values = Object.fromEntries(formData);

      const authData = await login(values.email, values.password);

      userLoginHandler(authData);

      toast.success("Login Successful!")

      navigate('/home');
    } catch (error) {
      console.error("Login failed:", error);
      navigate('/login')
    }
  };

  const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Jerni's Golf Club Login Page</h2>
        <form action={loginAction}>
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              id="password"
              required
            />
          </div>
          <button type="submit" disabled={isPending}>
            {isPending ? "Logging in..." : "Login"}
          </button>
          <p className="field">
            <span>If you don't have profile click <Link to="/register">here</Link></span>
          </p>
        </form>
      </div>
    </div>
  );
}
