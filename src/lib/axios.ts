import Axios, { AxiosRequestConfig } from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function authRequestInterceptor(config: AxiosRequestConfig) {
    if (config.headers) config.headers['x-api-key'] = API_KEY;
    return config;
}

export const axios = Axios.create({
    baseURL: API_URL
});

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        alert(message);
        return Promise.reject(error);
    }
);
