// IMplement a router logic for Posts Page

// Consolidates all the routes only of Backend,
//  logic for callback function of every route will
//  be implemented in sepereate controller file for simplesity
import express from "express";
import { getPosts, createPost } from "../controllers/postsPage.js";

const router = express.Router();

// Every post will be listed here inline
router.get("/", getPosts);
router.post("/", createPost);

export default router;
