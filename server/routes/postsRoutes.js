import express from "express";
import { 
  addPost, 
  getUserPosts, 
  getPosts, 
  deletePost, 
  updatePost 
} from "../controllers/postsController.js";
import auth from "../middlewars/auth.js";

// Creating an instance of Express router
const router = express.Router();

// Get all posts route
router.get("/", getPosts);

// Get user's posts route
router.get("/user", auth, getUserPosts);

// Add new post route
router.post("/", auth, addPost);

// Delete post route
router.delete("/:id", auth, deletePost);

// Update post route
router.put("/:id", auth, updatePost);

export { router as postsRoutes };