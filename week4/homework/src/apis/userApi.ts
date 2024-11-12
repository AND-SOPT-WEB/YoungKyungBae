import { instance } from './instance';

export const postSignup = async (username: string, password: string, hobby: string) => {
    try {
        const response = await instance.post("/user", {
            username,
            password,
            hobby,
        });
        return {success: true, no: response.data.result.no};
    } catch (error) {
        return {success: false, error};
    }
    
}