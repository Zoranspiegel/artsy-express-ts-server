import axios from "axios";

export async function getNewXAppToken() {
  try {
    const axiosRes = await axios.post("https://api.artsy.net/api/tokens/xapp_token", {
      client_id: process.env.ARTSY_CLIENT_ID,
      client_secret: process.env.ARTSY_CLIENT_SECRET,
    });

    const { data } = axiosRes;

    return data;
  } catch (error) {
    throw error;
  }
}
