const request = async (method, url, data, options = {}) => {
    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        }
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorData = await response.json();
            if (response.status === 403 && errorData.message == "Invalid access token") {
                localStorage.clear();
            }
            throw new Error(errorData.message || "Something went wrong");
        }
        if (response.status === 204) {
            return response;
        }
        const responseContentType = response.headers.get('Content-Type');
        if (!responseContentType) {
            return;
        }

        const result = await response.json();

        return result;

    } catch (error) {
        console.error("API Request Error:", error.message || error);
        alert(error.message || "An unexpected error occurred.");
        throw error;
    }
};

export default {
    get: request.bind(null, 'GET'),
    // get: (...params) => request('GET', ...params)
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
}
