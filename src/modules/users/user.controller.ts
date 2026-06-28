import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const result = await UserService.getAllUsers();
        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        next(error);
    }

};
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = req.params.id as string;
        const result = await UserService.getUserById(id);
        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;

        const result = await UserService.updateUser(id, req.body);

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;

        const result = await UserService.deleteUser(id);

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
}