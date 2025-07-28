import { Router } from "express";
import fs from "fs";

const router = Router();

fs.readdirSync(__dirname).forEach((file) => {
  if (file.endsWith("routes.ts") || file.endsWith("routes.js")) {
    const endpoint = `/${file.split(".")[0]}`;
    const route = require(`./${file.split(".").slice(0, -1).join(".")}`);
    router.use(endpoint, route.default);
  }
});

export default router;
