import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

dotenv.config();

const server = express();

server.use(morgan("dev"));

export default server;
