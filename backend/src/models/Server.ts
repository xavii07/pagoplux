import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

class ServerApp {
  private port: number;
  private app: Application;

  constructor() {
    this.port = Number(process.env.PORT) || 3000;
    this.app = express();

    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export default ServerApp;
