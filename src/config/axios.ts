import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create();
const BASE_API_URL: string = process.env.BASE_API_URL as string;

const onUnAuthorize = async (error: AxiosError): Promise<AxiosResponse> => {
    const originalRequest: InternalAxiosRequestConfig | undefined = error.config;

    const token = localStorage.getItem('AUTH_USER_TOKEN');
    const refreshToken = localStorage.getItem('AUTH_REFRESH_TOKEN');

    try {
        const refreshData = await axiosInstance.post(
            `${BASE_API_URL}/refresh-token`,
            {refreshToken},
            {headers: {Authorization: token}}
        );

        const newToken: string | undefined = refreshData?.data?.token;
        if (!newToken) throw new Error('token is invalid');
        localStorage.setItem('AUTH_USER_TOKEN', newToken);

        return axios({
            ...originalRequest,
            headers: {...originalRequest?.headers, Authorization: newToken}
        });
    } catch (e) {
        localStorage.removeItem('AUTH_USER_TOKEN');
        localStorage.removeItem('AUTH_REFRESH_TOKEN');
        return Promise.reject(error || e);
    }
};

const onForbidden = (): void => {
    localStorage.removeItem('AUTH_USER_TOKEN');
    localStorage.removeItem('AUTH_REFRESH_TOKEN');
};

const onRequest = (
    config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
    const newConfig = {...config};
    const token = localStorage.getItem('AUTH_USER_TOKEN');

    newConfig.baseURL = BASE_API_URL;
    newConfig.headers['Content-Type'] = 'application/json';

    if (token) {
        newConfig.headers['Authorization'] = `Bearer ${token}`;
    }

    return newConfig;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse) => {
    return response.data;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    const realStatus: number | undefined = error?.response?.status;
    const realError: AxiosResponse | undefined = error.response;

    if (realStatus === 401) {
        await onUnAuthorize(error);
    } else if (realStatus === 403) {
        onForbidden();
    }

    toast.error(realError?.data?.message || error?.message);
    return Promise.reject(realError || error);
};

export const setupInterceptorsTo = (axiosInstance: typeof axios): typeof axios => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
};