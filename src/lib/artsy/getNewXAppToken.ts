import axios from "axios";
import env from "../../env";

export async function getNewXAppToken() {
  try {
    const axiosRes = await axios.post("https://api.artsy.net/api/tokens/xapp_token", {
      client_id: env.ARTSY_CLIENT_ID,
      client_secret: env.ARTSY_CLIENT_SECRET,
    });

    const { data } = axiosRes;

    return data;
  } catch (error) {
    throw error;
  }
}
