//const express = require('express')
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT;

const __dirname = path.resolve();

const app = express();
app.use(express.json()); // allows us to use JSON data in the body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server is listening on http://localhost:" + PORT);
});

