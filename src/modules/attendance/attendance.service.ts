import { Attendance } from "../../models/attendance.model";
import { Employee } from "../../models/employee";
import { AppError } from "../../utils";

const checkIn = async (employeeId: string) => {
    const employee = await Employee.findById(employeeId);

    if (!employee) {
        throw new AppError("Employee Not Found", 404)
    };

    const today = new Date();

    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const existingAttendance = await Attendance.findOne({
        employee: employeeId,
        date: {
            $gte: startOfDay,
            $lte: endOfDay
        }
    })

    if (existingAttendance) {
        throw new AppError("You Have Already Checked In Today", 400)
    };

    const result = await Attendance.create({
        employee: employeeId,
        checkIn: new Date(),
        date: new Date(),
        status: "Present"
    });

    return result;

};

