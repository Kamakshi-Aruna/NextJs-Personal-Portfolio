import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email handler function
export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Create transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        // Email content
        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL, // Receiver email
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }
}
