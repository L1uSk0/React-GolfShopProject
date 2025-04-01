import { useEffect ,useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import requests from "../services/requests.js";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/users`;

export const useLogin = () => {
    const login = async (email, password) =>
        requests.post(
            `${baseUrl}/login`,
            { email, password },
        );

    return {
        login,
    }
};

export const useRegister = () => {
    const register = (email, password) =>
        requests.post(`${baseUrl}/register`, { email,password });

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        requests.get(`${baseUrl}/logout`, null, options)
            .then(userLogoutHandler);

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};
