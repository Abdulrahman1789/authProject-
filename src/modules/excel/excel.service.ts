import { Employee } from "../../models/employee";


export const importEmployees = async (data: any[]) => {
    try {
        const result = await Employee.insertMany(data);
        return result;
    } catch (error) {
        throw error;
    }
};

export const ExcelService = {
    importEmployees
}