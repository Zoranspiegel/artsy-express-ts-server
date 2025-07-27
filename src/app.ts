import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";

dotenv.config();

const server = express();

server.use(morgan("dev"));

server.use(errorHandlerMiddleware);

export default server;
