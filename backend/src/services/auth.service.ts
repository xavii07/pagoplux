import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IUserModel } from "../models/user.model";

export class AuthService {
  private readonly userModel: IUserModel;
  private readonly SECRET_KEY = process.env.SECRET_KEYJWT ?? "12d32fgre";

  constructor(userModel: IUserModel) {
    this.userModel = userModel;
  }

  async register(email: string, name: string, password: string) {
    const existingUser = await this.userModel.getOne(email);
    if (existingUser) {
      throw new Error("Usuario ya está registrado");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const createUser = await this.userModel.create({
      id: "",
      email,
      name,
      password: passwordHash,
    });

    if (!createUser) {
      throw new Error("No se pudo crear el usuario");
    }

    const token = this.generateToken({ email: createUser.email });

    return {
      email: createUser.email,
      name: createUser.name,
      token,
    };
  }

  private generateToken(payload: JwtPayload) {
    return jwt.sign(payload, this.SECRET_KEY, {
      expiresIn: "1h",
    });
  }
}
