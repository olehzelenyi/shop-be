import nodemailer from "nodemailer";

export class MailService {
  sendEmail = async (
    name: string,
    email: string,
    phone: string,
    message: string,
    subject: string,
  ) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
      port: 465, // Port for SMTP (usually 465)
      secure: true, // Usually true if connecting to port 465
      auth: {
        user: process.env.MAIL_USER, // Your email address
        pass: process.env.MAIL_PASS, // Password (for gmail, your app password)
        //⚠️ For better security, use environment variables set on the server for these values when deploying
      },
    });

    const messageInfo = await transporter.sendMail({
      from: `<${process.env.MAIL_USER}>`,
      replyTo: email,
      to: process.env.SEND_TO,
      subject: subject,
      html: this.generateHTML(name, email, phone, message),
    });

    return messageInfo;
  };

  generateHTML = (
    name: string,
    email: string,
    phone: string,
    message: string,
  ) => {
    return `
      <h1>YOU HAVE RECEIVED THE EMAIL FROM SHOP BE</h1>
      <br/>
      <h3>INFO</h3>
      <p>Full Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <br/>
      <p>${message}</p>
  `;
  };
}

const mailService = new MailService();
export default mailService;
