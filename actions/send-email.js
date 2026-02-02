"use server";

import { Resend } from "resend";

// List of verified emails for development
const VERIFIED_EMAILS = ["sakshisaraswat30@gmail.com", "a72717189@gmail.com"];

// Get the appropriate "from" email based on environment
const getFromEmail = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.EMAIL_FROM || "notifications@your-verified-domain.com";
  }
  return "onboarding@resend.dev"; // Default for development
};

export async function sendEmail({ to, subject, react }) {
  console.log("Attempting to send email:", {
    to,
    subject,
    react: react?.type?.name,
  });

  // Use the new API key for a72717189@gmail.com
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const emailConfig = {
      from: "Spendora <onboarding@resend.dev>",
      to: to, // Send directly to the intended recipient
      subject: subject,
      react,
    };

    console.log("Sending email with config:", {
      ...emailConfig,
      react: "React component hidden for brevity",
    });

    const data = await resend.emails.send(emailConfig);

    console.log("Email sent successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
