import { useState } from "react";
import { useRegister } from "../../api/authApi.js";
import { useNavigate } from "react-router";
import "./Register.css";

export default function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { register, loading, error } = useRegister();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await register(email, username, password);
            navigate("/"); // 
        } catch (err) {
            console.error("Registration failed:", err);
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Golf Club Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <span className="icon">📧</span>
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
                            type="text"
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
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
}
