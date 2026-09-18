import express from "express";
import { postBlog } from "../controllers/blogController.js";

const router = express.Router();

router.post("/postBlog", postBlog);

export default router;