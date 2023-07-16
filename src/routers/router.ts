import express from "express";
import { productRouter } from "./productRouter";

export const router = express.Router();

router.use("/products", productRouter);
