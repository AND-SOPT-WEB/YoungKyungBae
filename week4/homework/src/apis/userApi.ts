import { instance } from './instance';
import { AxiosError } from 'axios';

interface ErrorResponseData {
    code: string;
}

interface HobbyResponse {
    result: { hobby: string };
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
    
};

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
};

export const getMyHobby = async () => {
    try {
        const response = await instance.get<HobbyResponse>("/user/my-hobby");
        return {success: true, hobby: response.data.result.hobby};
    } catch (error) {
        const axiosError = error as AxiosError<ErrorResponseData>;
        const code = axiosError.response?.data?.code;
        return {success: false, code};
    }
};

export const getUserHobby = async (userNo: number) => {
    try {
        const response = await instance.get<HobbyResponse>(`/user/${userNo}/hobby`);
        return { success: true, hobby: response.data.result.hobby };
    } catch (error) {
        const axiosError = error as AxiosError<ErrorResponseData>;
        const code = axiosError.response?.data?.code;
        return { success: false, code };
    }
};