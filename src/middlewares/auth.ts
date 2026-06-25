import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { AppError } from "../utils";

export const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const statusCode = err.statusCode || 500;
    const status = err.status || "error";

    res.status(statusCode).json({
        status,
        message: err.message || "Internal Server Error",
        ...(process.env.NODE_ENV === "development" && { stack: err.stack })
    });
};

export interface AuthenticatedRequest extends Request {
    user?: any;
}

export const auth = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.headers.authorization;

        if (!token || !token.startsWith("Bearer ")) {
            return next(new AppError("Unauthorized Access", 401));
        }

        const accessToken = token.split(" ")[1];
        if (!accessToken) {
            return next(new AppError("Unauthorized Access", 401));
        }

        const decoded = jwt.verify(
            accessToken,
            env.JWT_SECRET
        );

        req.user = decoded;
        next();
    } catch (error) {
        next(new AppError("Unauthorized Access", 401));
    }
};