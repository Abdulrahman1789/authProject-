import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { validateRegisterInput } from "../modules/auth/auth.validation";
import { RegisterInput } from "../modules/auth/auth.types";
import { AppError } from "../utils";

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    validateRegisterInput(
        name,
        email,
        password
    );

    const data: RegisterInput = {
        name,
        email,
        password
    };

    const result = await AuthService.register(data);
    res.status(201).json(result);

}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new AppError("Email and password are required", 400);
    }

    const result = await AuthService.login({ email, password });

    res.status(200).json(result);
}