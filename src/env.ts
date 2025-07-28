import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  PORT: str(),
  ARTSY_CLIENT_ID: str(),
  ARTSY_CLIENT_SECRET: str(),
});

export default env;
