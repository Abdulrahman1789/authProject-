import { Employee } from "../../models/employee";
import { AppError } from "../../utils";


const createEmployee = async (payload: any) => {

    const isEmployeeExist = await Employee.findOne({ email: payload.email });

    if (isEmployeeExist) {
        throw new AppError("Employee Already Exists", 400);
    }

    const result = await Employee.create(payload);
    return result;
};

const getAllEmployees = async () => {

    const result = await Employee.find();

    return result;
};

const getEmployeeById = async (id: string) => {
    const result = await Employee.findById(id);
    if (!result) {
        throw new AppError("Employee Not Found", 404);
    }
    return result;
};

const updateEmployee = async (id: string, payload: any) => {
    const result = await Employee.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
    if (!result) {
        throw new AppError("Employee Not Found", 404);
    }
    return result;
};


const deleteEmployee = async (id: string) => {
    const result = await Employee.findByIdAndDelete(id);
    if (!result) {
        throw new AppError("Employee Not Found", 404);
    }
    return result;
};


export const EmployeeService = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};