import { useState } from "react";
import useMutationRequest from "../../hooks/useMutate.js"
import "./Register.css"; 

export default function Register() {
    const defaultUrl = 'http://localhost:3030/users/register'

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { mutate, loading, error, data } = useMutationRequest(); 

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("Registering with", email, password);

        // Prepare registration data
        const registerData = {
            email,
            password,
        };

        // Call the mutate function with the register endpoint
        await mutate(defaultUrl, "POST", registerData);
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Golf Club Register</h2>
                <form onSubmit={handleRegister}>
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
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {data && <p>Welcome, {data.user.name}!</p>} {/* Display user data on successful registration */}
            </div>
        </div>
    );
}
