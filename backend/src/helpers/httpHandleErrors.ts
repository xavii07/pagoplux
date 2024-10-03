import { Response } from "express";

export const httpHandleErrors = (
  res: Response,
  code: number,
  message: string,
  errorRow?: any
) => {
  console.log(errorRow);
  res.status(code).json({ message });
};
