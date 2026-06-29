import { Router } from "express";
import { importExcel } from "./excel.controller";
import { upload } from "../../config/multer";
import { auth, authorized } from "../../middlewares/auth";

export const excelRouter = Router();

excelRouter.post(
    "/import",
    auth,
    authorized("admin"),
    upload.single("file"),
    importExcel
);
