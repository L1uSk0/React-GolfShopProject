import { useState, useCallback } from "react";

export default function useMutationRequest() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const mutate = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json", ...headers },
                body: body ? JSON.stringify(body) : null,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
            return result;
        } catch (err) {
            setError(err.message || "Something went wrong");
            throw err; // Allows handling the error in the calling component
        } finally {
            setLoading(false);
        }
    }, []);

    return { mutate, loading, error, data };
}
