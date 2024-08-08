import express from "express";
import { getChat, createChat } from "./chat.controller.js";

const router = express.Router();

router.get("/chat", getChat);
router.post("/chat", createChat);

export default router;
