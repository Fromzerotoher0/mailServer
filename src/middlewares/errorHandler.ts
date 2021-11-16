import { Request, Response, NextFunction } from "express";
const errorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  response.status(error.statusCode).json({
    status: error.status,
    msg: error.message,
  });
};

export default errorHandler;
