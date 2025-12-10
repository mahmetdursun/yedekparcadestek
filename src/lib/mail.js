// src/lib/mail.js
import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // SMTP ayarları yoksa mail göndermeyi sessizce pas geçelim
  if (!host || !port || !user || !pass) {
    console.warn("⚠ SMTP env değişkenleri tanımlı değil, mail gönderilmeyecek.");
    return null;
  }

  transporter = nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465, // 465 ise secure
    auth: { user, pass },
  });

  return transporter;
}

export async function sendPasswordResetEmail({ to, resetUrl }) {
  const t = getTransporter();
  if (!t) {
    console.log("📧 (DEV) Şifre sıfırlama linki:", resetUrl);
    return;
  }

  const from = process.env.SMTP_FROM || "no-reply@yedekparcadestek.com";

  await t.sendMail({
    from,
    to,
    subject: "Şifre Sıfırlama | yedekparcadestek",
    text: `Merhaba,

Şifrenizi sıfırlamak için aşağıdaki bağlantıya tıklayın:

${resetUrl}

Bu bağlantı sınırlı bir süre için geçerlidir. Siz talep etmediyseniz bu maili görmezden gelebilirsiniz.

İyi günler dileriz.`,
    html: `
      <p>Merhaba,</p>
      <p>Şifrenizi sıfırlamak için aşağıdaki butona tıklayın:</p>
      <p>
        <a href="${resetUrl}" 
           style="display:inline-block;padding:10px 16px;background:#dc2626;color:#fff;text-decoration:none;border-radius:4px;">
          Şifremi Sıfırla
        </a>
      </p>
      <p>Bağlantı sınırlı bir süre için geçerlidir. Siz talep etmediyseniz bu maili görmezden gelebilirsiniz.</p>
      <p>yedekparcadestek</p>
    `,
  });
}
