import { Router } from "express";
import {
    createDepartment,
    getAllDepartment,
    getDepartmentById,
    updateDepartment,
    deleteDepartment
} from "./department.controller";
import { auth, authorized } from "../../middlewares/auth";

export const departmentRouter = Router();

departmentRouter.post(
    "/",
    auth,
    authorized("admin"),
    createDepartment
);

departmentRouter.get(
    "/",
    auth,
    authorized("admin"),
    getAllDepartment
);

departmentRouter.get(
    "/:id",
    auth,
    authorized("admin"),
    getDepartmentById
);

departmentRouter.patch(
    "/:id",
    auth,
    authorized("admin"),
    updateDepartment
);

departmentRouter.delete(
    "/:id",
    auth,
    authorized("admin"),
    deleteDepartment
);