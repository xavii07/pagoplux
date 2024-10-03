import ServerApp from "./models/Server";
import dotenv from "dotenv";
dotenv.config();

const server = new ServerApp();
server.listen();
