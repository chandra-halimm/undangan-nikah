import express from "express";
// import AuthRouter from "./routes/api/auth/auth.route";
import ChatRoutes from "./routes/api/chat/chat.route.js";

const app = express();

app.use(express.json());

// Route
// app.use("/", AuthRouter);
app.use(ChatRoutes);

export default app;
