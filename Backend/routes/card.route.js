import express from "express";
import { getAllCards, getCardById } from "../controllers/card.controller.js";

const router = express.Router();


router.get("/", getAllCards);       // GET /cards → list all cards
router.get("/:id", getCardById);    // GET /cards/:id → detail page

export default router;
