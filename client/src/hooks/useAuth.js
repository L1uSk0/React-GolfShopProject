import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { useLogin, useRegister, useLogout } from "../api/authApi.js";

export default function useAuth() {
    const authData = useContext(UserContext);
    const { login, loading: loginLoading, error: loginError } = useLogin();
    const { register, loading: registerLoading, error: registerError } = useRegister();
    const { isLoggedOut, loading: logoutLoading, error: logoutError } = useLogout();

    return {
        ...authData,
        userId: authData._id,
        isAuthenticated: !!authData.accessToken,
        login,
        register,
        isLoggedOut,
        loginLoading,
        registerLoading,
        logoutLoading,
        loginError,
        registerError,
        logoutError,
    };
}
