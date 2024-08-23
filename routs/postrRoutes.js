import * as postController from "../controllers/postController.js";
import express from "express";

const router = express.Router();
router.get("/list",postController.listPosts);
router.post("/add/:id", postController.createPost);
router.delete("/delete/:id", postController.deletePost);
router.post("/detail/:id", postController.getPostDetails);
router.post("/edit/:id", postController.getEditPost);
router.post("/edit/:id", postController.updatePost);

export default router;
