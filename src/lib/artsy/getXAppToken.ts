import axios from "axios";
import prisma from "../../db/prisma";
import env from "../../env";
import { xAppTokenSchema } from "../../models/zodSchemas/xAppTokenSchema";

export async function getXAppToken() {
  try {
    const dbToken = await prisma.xAppToken.findFirst();

    if (dbToken) {
      const today = Date.now();
      const expirationTIme = new Date(dbToken.expires_at).getTime();

      if (today < expirationTIme) {
        const token = dbToken.token;

        return token;
      } else {
        await prisma.xAppToken.delete({
          where: {
            id: dbToken.id,
          },
        });
      }
    }

    const axiosRes = await axios.post("https://api.artsy.net/api/tokens/xapp_token", {
      client_id: env.ARTSY_CLIENT_ID,
      client_secret: env.ARTSY_CLIENT_SECRET,
    });

    const axiosData = axiosRes.data;

    const zodParse = xAppTokenSchema.safeParse(axiosData);

    if (!zodParse.success) {
      throw new Error(zodParse.error.message);
    }

    const { data } = zodParse;

    const newXAppToken = await prisma.xAppToken.create({
      data,
    });

    return newXAppToken.token;
  } catch (error) {
    throw error;
  }
}
