import server from "./src/app";
import env from "./src/env";

const PORT = env.PORT ?? 3001;

server.listen(PORT, () => {
  console.log(`🧞 Listening on port ${PORT}...`);
});
