import { Request, Response, NextFunction } from "express";
import * as XLSX from "xlsx";
import { ExcelService } from "./excel.service";


export const importExcel = async (req: Request, res: Response, next: NextFunction) => {

    console.log("Controller Started");

    try {
        console.log(req.file);
        const workbook = XLSX.readFile(req.file!.path);

        const sheetName = workbook.SheetNames[0];

        if (!sheetName) {
            throw new Error("No Sheets Found in the Excel File")
        }

        const worksheet = workbook.Sheets[sheetName];

        if (!worksheet) {
            throw new Error("Sheet not Found")
        }

        const data = XLSX.utils.sheet_to_json(worksheet);

        const result = await ExcelService.importEmployees(data as any[]);


        res.status(200).json({
            success: true,
            message: "Employees imported successfully",
            count: result.length,
            data: result
        })
    } catch (error) {
        next(error);
    }
}