import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import useMutationRequest from "../hooks/useMutate.js";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
    const { userLoginHandler } = useContext(UserContext);
    const { mutate, loading, error } = useMutationRequest();

    const login = async (email, password) => {
        const userData = await mutate(`${baseUrl}/login`, "POST", { email, password });

        if (userData) {
            userLoginHandler(userData);
        }

        return userData;
    };

    return { login, loading, error };
};

export const useRegister = () => {
    const { userLoginHandler } = useContext(UserContext);
    const { mutate, loading, error } = useMutationRequest();

    const register = async (email, username, password) => {
        const userData = await mutate(`${baseUrl}/register`, "POST", { email, username, password });

        if (userData) {
            userLoginHandler(userData); 
        }

        return userData;
    };

    return { register, loading, error };
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);
    const { mutate, loading, error } = useMutationRequest();

    const logout = async () => {
        if (!accessToken) return;

        try {
            await mutate(`${baseUrl}/logout`, "GET", null, {
                headers: { "X-Authorization": accessToken },
            });

            userLogoutHandler(); 
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    useEffect(() => {
        logout(); 
    }, [accessToken]); 

    return { isLoggedOut: !accessToken, loading, error };
};
