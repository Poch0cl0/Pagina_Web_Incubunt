import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function enviarCorreo(
  destinatario: string,
  asunto: string,
  mensajeHtml: string
) {
  await transporter.sendMail({
    from: `"INCUBUNT" <${process.env.SMTP_USER}>`,
    to: destinatario,
    subject: asunto,
    html: mensajeHtml,
  });
}
