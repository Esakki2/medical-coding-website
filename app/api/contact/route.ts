import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const maxLengths = {
  name: 100,
  email: 254,
  phone: 40,
  message: 4000,
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid name, email, and message." }, { status: 400 });
    }

    if (
      name.length > maxLengths.name ||
      email.length > maxLengths.email ||
      phone.length > maxLengths.phone ||
      message.length > maxLengths.message
    ) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    const requiredEnv = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_USER",
      "SMTP_PASSWORD",
      "CONTACT_EMAIL",
    ] as const;

    for (const key of requiredEnv) {
      if (!process.env[key]) {
        return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`, "", message].join("\n"),
    });

    return NextResponse.json({ message: "Your message has been sent." });
  } catch {
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
