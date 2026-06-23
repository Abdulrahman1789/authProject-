import { RegisterInput } from "./../modules/auth/auth.types";

export const AuthService = {
    register: async (data: RegisterInput) => {
        return {
            message: "service working",
            data,
        };
    }
}