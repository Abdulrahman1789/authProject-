import { Department } from "../../models/department.model";
import { AppError } from "../../utils";

const createDepartment = async (payload: any) => {
    const isDepartmentExist = await Department.findOne({ name: payload.name });

    if (isDepartmentExist)
        throw new AppError("Department already exist", 409);

    const result = await Department.create(payload);

    return result;
};

const getAllDepartment = async () => {
    const departments = await Department.find();
    return departments;
};

const getDepartmentById = async (id: string) => {
    const department = await Department.findById(id);

    if (!department)
        throw new AppError("Department not found", 404);

    return department;
};

const updateDepartment = async (id: string, payload: any) => {
    const department = await Department.findByIdAndUpdate(
        id,
        payload,
        {
            new: true,
            runValidators: true,
        });

    if (!department)
        throw new AppError("Department not found", 404);

    return department;
};

const deleteDepartment = async (id: string) => {
    const department = await Department.findByIdAndDelete(id);

    if (!department)
        throw new AppError("Department not found", 404);

    return department;
};


export const departmentServices = {
    createDepartment,
    getAllDepartment,
    getDepartmentById,
    updateDepartment,
    deleteDepartment
};












