import { Router } from "express";
import { register, login } from "../../controllers/auth.controller";
import { auth, authorized } from "../../middlewares/auth";


export const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

authRouter.get("/admin", auth, authorized("admin"), (req, res) => {

    res.status(200).json({ message: "Welcome Admin!" });

});