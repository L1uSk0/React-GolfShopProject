const request = async (method, url, data = null, options = {}) => {
    const config = {
        method,
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    const response = await fetch(url, config);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get('Content-Type');
    return contentType?.includes('application/json') ? response.json() : response.text();
};

const apiRequest = {
    get: (url, options) => request('GET', url, null, options),
    post: (url, data, options) => request('POST', url, data, options),
    put: (url, data, options) => request('PUT', url, data, options),
    delete: (url, options) => request('DELETE', url, null, options),
};

export default apiRequest;
