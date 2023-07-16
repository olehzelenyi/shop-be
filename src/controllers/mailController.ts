import { Request, Response } from "express";
import mailService from "../services/mailService";

export class MailController {
  sendEmail = async (req: Request, res: Response) => {
    const { name, email, phone, message, subject } = req.body;
    const messageInfo = await mailService.sendEmail(
      name,
      email,
      phone,
      message,
      subject,
    );

    if (!messageInfo)
      return res
        .status(500)
        .send({ errorMsg: "Server cannot process request" });

    return res.status(200).send({ message: "email is sent" });
  };
}

const mailController = new MailController();
export default mailController;
