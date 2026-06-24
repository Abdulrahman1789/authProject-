import { RegisterInput } from "./../modules/auth/auth.types";
import bycrpt from "bcrypt";
import { User } from "../models/user.model";

const register = async (payload: any) => {
    const isUserExists = await User.findOne({
        email: payload.email,
    });

    if (isUserExists) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bycrpt.hash(
        payload.password,
        10
    );

    payload.password = hashedPassword;

    const result = await User.create(payload);

    return result;
};

export const AuthService = {
    register,
}