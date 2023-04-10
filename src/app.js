import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routers/auth";
import categoryRouter from "./routers/category";
import productRouter from "./routers/product";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouter);

app.use("/api", categoryRouter);

app.use("/api", authRouter);

mongoose.connect("mongodb://127.0.0.1:27017/asm");

export const viteNodeApp = app;
