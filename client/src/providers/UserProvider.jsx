import { UserContext } from "../contexts/UserContext";
import usePersistedState from "../hooks/usePersistedState";

export default function UserProvider({ children }) {
    const [authData, setAuthData] = usePersistedState("auth", {
        accessToken: null,
        _id: null,
        email: null,
        username: null,
    });

    const userLoginHandler = (resultData) => {
        setAuthData({
            accessToken: resultData.accessToken || null,
            _id: resultData._id || null,
            email: resultData.email || null,
            username: resultData.username || null,
        });
    };

    const userLogoutHandler = () => {
        setAuthData({
            accessToken: null,
            _id: null,
            email: null,
            username: null,
        });
    };

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            {children}
        </UserContext.Provider>
    );
}
