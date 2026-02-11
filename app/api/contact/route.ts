import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message, phone } = await request.json();

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'magdab.78b@gmail.com',
            subject: `New Reservation Request from ${name}`,
            html: `
        <h2>New Contact from Zitla Ceiba Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`
        })

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    }
    catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }
}
