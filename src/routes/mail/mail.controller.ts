import { Request, Response } from "express";
const nodemailer = require("nodemailer");
function sendEmail(request: Request, response: Response) {
  const email = request.body.email;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ander.er985@gmail.com",
      pass: "hhmtxqbnxucaxptx",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let MailOptions = {
    from: "Combeneficios",
    to: `${email}`,
    subject: "suscripcion realizada",

    html: `
    <h1>Suscripcion realizada correctamente</h1>
        <h2>Gracias por suscribirse con nosotros semanalmente le estaremos informando
        acerca de las actualizaciones de combeneficios
        </h2>
     `,
  };

  transporter.sendMail(MailOptions, (error: any, info: any) => {
    if (error) {
      console.log(error.message);
      response.status(500).send(error.message);
    } else {
      console.log("email enviado");
      response.status(200).json(request.body);
    }
  });
}

export default sendEmail;
