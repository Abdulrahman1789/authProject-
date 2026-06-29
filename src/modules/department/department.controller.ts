import { Request, Response, NextFunction } from "express";
import { departmentServices } from "./department.service";


export const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await departmentServices.createDepartment(req.body);
        res.status(201).json({
            success: true,
            message: "Department created successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
}

export const getAllDepartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await departmentServices.getAllDepartment();
        res.status(201).json({
            success: true,
            message: "Department fetched successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
}

export const getDepartmentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params as { id: string };
        const result = await departmentServices.getDepartmentById(id);
        res.status(201).json({
            success: true,
            message: "Department fetched successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
}

export const updateDepartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params as { id: string };
        const result = await departmentServices.updateDepartment(id, req.body);
        res.status(201).json({
            success: true,
            message: "Department updated successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
}

export const deleteDepartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params as { id: string };
        const result = await departmentServices.deleteDepartment(id);
        res.status(201).json({
            success: true,
            message: "Department deleted successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
}


