import type { NextFunction, Request, Response } from "express";
import { getXAppToken } from "../lib/artsy/getXAppToken";
import axios from "axios";
import env from "../env";

export async function getAtworkByID(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { artworkID } = req.params;

    const token = await getXAppToken();

    const axiosRes = await axios.get(`${env.ARTSY_API_URL}/artworks/${artworkID}`, {
      headers: {
        "X-XApp-Token": token,
      },
    });

    const { data } = axiosRes;

    res.status(200).json({ msg: "Success", data });
  } catch (error) {
    next(error);
  }
}
