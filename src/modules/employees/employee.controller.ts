import { Request, Response, NextFunction } from "express";
import { EmployeeService } from "./empolyee.service";

export const createEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await EmployeeService.createEmployee(req.body);
        res.status(201).json({
            success: true,
            message: "Employee created successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const getAllEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await EmployeeService.getAllEmployees();
        res.status(200).json({
            success: true,
            message: "Employees fetched successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const getEmployeeById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params as { id: string };
        const result = await EmployeeService.getEmployeeById(id);
        res.status(200).json({
            success: true,
            message: "Employee fetched successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const updateEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params as { id: string };

    try {
        const result = await EmployeeService.updateEmployee(id, req.body);
        res.status(200).json({
            success: true,
            message: "Employee updated successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const deleteEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const { id } = req.params as { id: string };
        await EmployeeService.deleteEmployee(id);
        res.status(200).json({
            success: true,
            message: "Employee deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

export const EmployeeController = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};
