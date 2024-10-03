import { Request, Response } from "express";
import { httpHandleErrors } from "../helpers/httpHandleErrors";
import { AuthService } from "../services/auth.service";
import {
  validateLoginSchema,
  validateRegisterSchema,
} from "../helpers/squemas/auth.squema";

export class AuthController {
  private readonly authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  register = async (req: Request, res: Response) => {
    const result = validateRegisterSchema(req.body);
    if (result.error) {
      return httpHandleErrors(res, 400, result.error.message);
    }
    const { email, name, password } = result.data;

    try {
      const newUser = await this.authService.register(email, name, password);
      res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof Error) {
        return httpHandleErrors(res, 400, error.message);
      }
    }
  };
}
