import { Router } from "express";
import { AuthService } from "../services/auth.service";
import { AuthController } from "../controllers/auth.controller";
import { IUserModel } from "../models/user.model";

export const createAuthRouter = (userModel: IUserModel) => {
  const router = Router();
  const authService = new AuthService(userModel);
  const authController = new AuthController(authService);

  router.post("/login", authController.login);
  router.post("/register", authController.register);

  return router;
};
