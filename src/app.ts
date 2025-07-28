import express from "express";
import morgan from "morgan";
import routes from "./routes";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";

const server = express();

server.use(morgan("dev"));

server.use("/api", routes);

server.use(errorHandlerMiddleware);

export default server;
