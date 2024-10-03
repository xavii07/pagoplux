import { query } from "../db/connection";
import { IUser } from "../interfaces/user.interface";
export interface IUserModel {
  getOne: (email: string) => Promise<IUser | null>;
  create: (user: IUser) => Promise<IUser | null>;
}

export class UserModel implements IUserModel {
  async getOne(email: string): Promise<IUser | null> {
    try {
      const user = await query(
        "SELECT name, email, id, password FROM users WHERE email = $1",
        [email]
      );

      if (user.rows.length === 0) {
        return null;
      }

      const userReturn: IUser = {
        email: user.rows[0].email,
        id: user.rows[0].id,
        name: user.rows[0].name,
        password: user.rows[0].password,
      };

      return userReturn;
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      return null;
    }
  }

  async create(user: Partial<IUser & { id?: string }>): Promise<IUser | null> {
    try {
      const userCreate = await query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [user.name, user.email, user.password]
      );

      if (userCreate.rows.length === 0) {
        return null;
      }

      return userCreate.rows[0];
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      return null;
    }
  }
}
