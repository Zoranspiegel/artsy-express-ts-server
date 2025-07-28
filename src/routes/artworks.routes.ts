import { Router } from "express";
import * as ctr from "../controllers";

const router = Router();

router.get("/", ctr.getAllArtworks);

router.get("/artist/:artistID", ctr.getArtworksByArtist);

router.get("/:artworkID", ctr.getAtworkByID);

export default router;
