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

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
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

    const requiredEnv = ["EMAIL_USER", "EMAIL_PASS", "CONTACT_EMAIL"] as const;

    for (const key of requiredEnv) {
      if (!process.env[key]) {
        return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        `Message:\n${message}`,
      ].join("\n"),
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ message: "Your message has been sent." });
  } catch {
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
