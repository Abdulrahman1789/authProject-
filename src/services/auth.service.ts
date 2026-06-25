import { RegisterInput } from "./../modules/auth/auth.types";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import { env } from "../config/env";
import { AppError } from "../utils";

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
    
    payload.role = "employee";
    
    const result = await User.create(payload);

    return result;
};

const login = async (payload: any) => {
    const user = await User.findOne({ email: payload.email });
    if (!user) {
        throw new AppError("Invalid credentials", 401);
    }

    const isPasswordMatched = await bycrpt.compare(
        payload.password,
        user.password
    );

    if (!isPasswordMatched) {
        throw new AppError("Invalid credentials", 401);
    }


    const accessToken = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        env.JWT_SECRET,
        { expiresIn: env.JWT_EXPIRES_IN as any }
    );

    return {
        accessToken,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    };
};

export const AuthService = {
    register,
    login,
};