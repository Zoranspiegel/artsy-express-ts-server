import dotenv from "dotenv";
import { cleanEnv, str } from "envalid";

dotenv.config();

const env = cleanEnv(process.env, {
  PORT: str(),
  ARTSY_CLIENT_ID: str(),
  ARTSY_CLIENT_SECRET: str(),
  ARTSY_API_URL: str(),
});

export default env;
