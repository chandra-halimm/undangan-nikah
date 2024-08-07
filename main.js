import "dotenv/config";
import http from "http";
import express from "express";
import { sequelize } from "./server/configs/database.js";
import { Edge } from "edge.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Konfigurasi Edge.js
const edge = Edge.create({
  cache: process.env.NODE_ENV === "development",
});

// Mount Edge.js dengan direktori views
edge.mount(path.join(__dirname, "views"));

// Middleware untuk melayani file statis (CSS, JS)
app.use(express.static(path.join(__dirname, "public")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

// Rute
app.get("/", async (req, res, next) => {
  try {
    const data = { title: "Home Page" };
    const html = await edge.render("pages/index", data);
    res.setHeader("content-type", "text/html");
    res.send(html);
  } catch (error) {
    next(error);
  }
});
app.get("/test", async (req, res, next) => {
  try {
    const data = { title: "Home Page" };
    const html = await edge.render("pages/test", data);
    res.setHeader("content-type", "text/html");
    res.send(html);
  } catch (error) {
    next(error);
  }
});

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    const database = await sequelize.sync();
    if (!database) {
      console.log("database cannot sync");
    } else {
      console.log("====================================================");
      console.log("Database Connected Successfully");
    }

    server.listen(PORT, () =>
      console.log(`🚀 [SERVER] is running on port http://localhost:${PORT}`)
    );
    console.log("====================================================");
  } catch (error) {
    console.error(`⚠️ [ERROR] ${error.message}`);
  }
};

start();
