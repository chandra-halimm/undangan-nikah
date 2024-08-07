import express from "express";
import AuthRouter from "./routes/api/auth/auth.route";

const app = express();

app.use(express.json());

// Route
app.use("/", AuthRouter);

export default app;
