import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import routes from "./routes";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";

dotenv.config();

const server = express();

server.use(morgan("dev"));

server.use("/api", routes);

server.use(errorHandlerMiddleware);

export default server;
