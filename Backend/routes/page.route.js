import express from "express";  
import { getPages, getPageBySlug, getPageByCategoryAndSlug } from "../controllers/page.controller.js";

const router = express.Router();

router.get("/:category/:slug", getPageByCategoryAndSlug); // Most specific first
// router.get("/:category", getPageBySlug);                     // Less specific
router.get("/", getPages);                                // Catch-all / list


export default router;