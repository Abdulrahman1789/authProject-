import {Router} from "express";
import { getAllUsers, getUserById, updateUser } from "./user.controller";
import { auth, authorized } from "../../middlewares/auth";


export const userRouter = Router();

userRouter.get("/",
    auth,
    authorized("admin"),
    getAllUsers,

);


userRouter.get("/:id",
    auth,
    authorized("admin"),
    getUserById
);

userRouter.patch("/:id",
    auth,
    authorized("admin"),
    updateUser
);