import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import apiRequest from "../utils/request";

export default function useAuth() {
    const { accessToken, _id, ...authData } = useContext(UserContext);
    
    const authRequest = (method, url, data = null, options = {}) => {
        const headers = accessToken 
            ? { 'X-Authorization': accessToken, ...options.headers } 
            : options.headers;

        return apiRequest[method.toLowerCase()](url, data, { ...options, headers });
    };

    return {
        ...authData,
        userId: _id,
        isAuthenticated: Boolean(accessToken),
        request: {
            get: (url, options) => authRequest('GET', url, null, options),
            post: (url, data, options) => authRequest('POST', url, data, options),
            put: (url, data, options) => authRequest('PUT', url, data, options),
            delete: (url, options) => authRequest('DELETE', url, null, options),
        }
    };
}
