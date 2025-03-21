import { useRegister } from "../../api/authApi.js";
import { useNavigate } from "react-router";
import { useUserContext } from "../../contexts/UserContext.jsx";
import { Link } from "react-router";
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
            console.error("Register failed:", error);
            // You can add an error state or show an alert to notify the user
            alert("Invalid credentials or network error. Please try again.");
        }

    }

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Golf Club Register</h2>
                <form action={registerHandler}>
                    <div className="input-group">
                        <span className="icon">📧</span>
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
                    <div className="input-group">
                        <span className="icon">🔒</span>
                        <input
                            type="password"
                            placeholder="Must match password"
                            name="rePassword"
                            id="rePassword"
                            required
                        />
                    </div>
                    <button type="submit" value="Register" >Register
                    </button>
                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </form>
            </div>
        </div>
    );
}
