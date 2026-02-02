import { sendEmail } from "@/actions/send-email";
import EmailTemplate from "@/emails/template.jsx";
import { NextResponse } from "next/server";

export async function GET() {
  const testData = {
    userName: "Akriti",
    type: "budget-alert",
    data: {
      percentageUsed: 85.5,
      budgetAmount: "1000.00",
      totalExpenses: "855.00",
      accountName: "Test Account",
    },
  };

  try {
    // Test sending directly to a72717189@gmail.com
    const result = await sendEmail({
      to: "a72717189@gmail.com",
      subject: "Test Budget Alert with New API Key",
      react: EmailTemplate(testData),
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Test failed:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
