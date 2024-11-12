import { instance } from './instance';
import { AxiosError } from 'axios';

interface ErrorResponseData {
    code: string;
}

export const postSignup = async (username: string, password: string, hobby: string) => {
    try {
        const response = await instance.post("/user", {
            username,
            password,
            hobby,
        });
        return {success: true, no: response.data.result.no};
    } catch (error) {
        const axiosError = error as AxiosError<ErrorResponseData>;
        const code = axiosError.response?.data?.code;
        return {success: false, code};
    }
    
}

export const postLogin = async (username: string, password: string) => {
    try {
        const response = await instance.post("/login", {
            username,
            password,
        });
        return {success: true, token: response.data.result.token};
    } catch (error) {
        const axiosError = error as AxiosError<ErrorResponseData>;
        const code = axiosError.response?.data?.code;
        return {success: false, code};
    }
}