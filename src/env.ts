import dotenv from "dotenv";
import { cleanEnv, str } from "envalid";

dotenv.config();

const env = cleanEnv(process.env, {
  PORT: str(),
  ARTSY_CLIENT_ID: str(),
  ARTSY_CLIENT_SECRET: str(),
});

export default env;
