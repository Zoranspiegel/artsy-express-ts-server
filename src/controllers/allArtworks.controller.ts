import type { Request, Response, NextFunction } from "express";
import axios from "axios";
import { getXAppToken } from "../lib/artsy/getXAppToken";
import env from "../env";

export async function getAllArtworks(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const size = req.query.size && Number(req.query.size) > 0 ? Number(req.query.size) : 20;
    const page = req.query.page && Number(req.query.page) > 0 ? Number(req.query.page) - 1 : 0;
    const offset = page * size;

    const token = await getXAppToken();

    const axiosRes = await axios.get(`${env.ARTSY_API_URL}/artworks?total_count=1&size=${size}&offset=${offset}`, {
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
