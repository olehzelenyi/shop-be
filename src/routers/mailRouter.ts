import express from "express";
import mailController from "../controllers/mailController";

export const mailRouter = express.Router();

mailRouter.post("/", mailController.sendEmail);
