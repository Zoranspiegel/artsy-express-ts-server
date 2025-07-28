import type { Request, Response, NextFunction } from "express";

export async function getAllArtworks(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    res.status(200).json({ msg: "Success", data: [] });
  } catch (error) {
    next(error);
  }
}
