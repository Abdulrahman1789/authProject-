import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { env } from "./config/env";
import { callbackify } from "node:util";
import { get } from "node:http";
import { AppError } from "./utils/index";
import { globalErrorHandler } from "./middlewares/auth";

import { authRouter } from "./modules/auth/auth.route";
import { userRouter } from "./modules/users/user.route";
import { departmentRouter } from "./modules/department/department.route";
// import { messageRouter } from "./modules/message/message.routes";
import { excelRouter } from "./modules/excel/excel.route";
import { employeeRouter } from "./modules/employees/employee.route";

export const app = express();

app.use(helmet());
const allowedOrigins = env.ALLOWED_ORIGINS?.split(",").map((o) => o.trim() ?? []);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins?.includes(origin)) return callback(null, true);
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
})
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/department", departmentRouter);
// app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/excel", excelRouter);
app.use("/api/v1/employee", employeeRouter);


app.all("/{*splate}", (req, _res, next) => {
    next(new AppError(`Route ${req.originalUrl} not Found`, 404));
});
app.use(globalErrorHandler);
