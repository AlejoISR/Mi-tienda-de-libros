import { Request, Response, NextFunction } from "express";
import { error } from "node:console";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) =>{

    console.error("Error capturado:", err.message);

    res.status(500).json({
        error: "Error inteno del servidor, en breves lo solucionameros, gracias por su paciencia "
    });
};