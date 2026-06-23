import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { validateRegisterInput } from "../modules/auth/auth.validation";
import { RegisterInput } from "../modules/auth/auth.types";

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


