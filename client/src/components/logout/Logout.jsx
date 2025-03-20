import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi.js";

export default function Logout() {
    const { isLoggedOut, loading } = useLogout();

    if (loading) return <p>Logging out...</p>; //

    return isLoggedOut ? <Navigate to="/" /> : null;
}