import { Page } from "../models/page.model.js";

// @desc Get all pages
// @route GET /api/pages
export const getPages = async (req, res) => {
  try {
    const pages = await Page.find({});
    return res.json(pages);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

// @desc Get single page by slug (still useful if you want simple lookup)
// @route GET /api/pages/:slug
export const getPageBySlug = async (req, res) => {
  try {
    const { category } = req.params;
    const page = await Page.findOne({ category });

    if (!page) return res.status(404).json({ error: "Page not found" });

    return res.json(page);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

// @desc Get single page by category + slug
// @route GET /api/pages/:category/:slug
export const getPageByCategoryAndSlug = async (req, res) => {
  try {
    const { category, slug } = req.params;

    const page = await Page.findOne({ category, slug });

    if (!page) return res.status(404).json({ error: "Page not found" });

    return res.json(page);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};


