import { AppError } from "../../utils";

export const validateRegisterInput = (
    name: unknown,
    email: unknown,
    password: unknown
): void => {
    if (!name || !email || !password) {
        throw new AppError("All fields are required", 400);
    };
    if (
        typeof name !== 'string' ||
        typeof email !== 'string' ||
        typeof password !== 'string'
    ) {
        throw new AppError("All fields must be strings", 400);
    }
}