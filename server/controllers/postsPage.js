// Gonna have the logic for all callback furnction of
//  routes of post page which seperates from the actual routes of backend

import PostMessages from "../models/postMessageSchema.js";

// Get submitted posts from database,
//  meanwhile validate the mongoose schema
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessages.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add a post to database,
//  before inserting in DB validate whether its been submitted as per defined schema
export const createPost = async (req, res) => {
  const postBody = req.body;
  const newPost = PostMessages(postBody);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
