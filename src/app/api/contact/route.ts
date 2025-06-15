// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { product, issue, email, subject, description } = body;

  if (!email || !subject || !description) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const combinedSubject = `${issue}: ${subject}`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: combinedSubject,
      html: `
        <h2>New Support Request</h2>
        <p><strong>Product:</strong> ${product || "N/A"}</p>
        <p><strong>From:</strong> ${email}</p>
        <p>${combinedSubject}</p>
        <p><strong>Description:</strong> ${description || "N/A"}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
