import { Router } from "express";
import { auth, authorized } from "../../middlewares/auth";
import { EmployeeController } from "./employee.controller";

export const employeeRouter = Router();

employeeRouter.post(
    "/",
    auth,
    authorized("admin"),
    EmployeeController.createEmployee
);

employeeRouter.get(
    "/",
    auth,
    EmployeeController.getAllEmployees
);

employeeRouter.get(
    "/:id",
    auth,
    EmployeeController.getEmployeeById
);

employeeRouter.patch(
    "/:id",
    auth,
    authorized("admin"),
    EmployeeController.updateEmployee
);

employeeRouter.delete(
    "/:id",
    auth,
    authorized("admin"),
    EmployeeController.deleteEmployee
);