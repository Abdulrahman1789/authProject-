import { Request, Response, NextFunction } from "express";

export const importExcel = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.file);
        res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            file: req.file
        })
    } catch (error) {
        next(error);
    }
}