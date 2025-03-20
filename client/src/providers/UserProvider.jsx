import { UserContext } from "../contexts/UserContext.jsx";
import usePersistedState from "../hooks/usePersistedState.js";

export default function UserProvider({ children }) {
    const [authData, setAuthData] = usePersistedState("auth", {});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    };

    const userLogoutHandler = () => {
        console.log("Logging out: Clearing localStorage");
        localStorage.removeItem('auth'); 
        setAuthData({}); 
    };

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            {children}
        </UserContext.Provider>
    );
}
