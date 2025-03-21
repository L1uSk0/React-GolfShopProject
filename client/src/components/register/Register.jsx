import { useRegister } from "../../api/authApi.js";
import { useNavigate } from "react-router";
import { useUserContext } from "../../contexts/UserContext.jsx";
import "./Register.css";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (formData) => {
        try {
            const { email, password, rePassword } = Object.fromEntries(formData);

            if (password !== rePassword) {
                console.log('Password missmatch');

                return;
            }

            const authData = await register(email, password);

            userLoginHandler(authData);

            navigate('/');
        } catch (error) {
            console.error("Login failed:", error);
            // You can add an error state or show an alert to notify the user
            alert("Invalid credentials or network error. Please try again.");
        }

    }

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Golf Club Register</h2>
                <form onSubmit={registerHandler}>
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
                    <div className="input-group">
                        <span className="icon">🔒</span>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="rePassword"
                            id="rePassword"
                            required
                        />
                    </div>
                    <button type="submit" value="Register" >
                    </button>
                </form>

                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
}
