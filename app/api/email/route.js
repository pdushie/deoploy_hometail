import { Resend } from "resend";
import { NextResponse } from "next/server";
import Email from "@/emails/Email";
import { v4 as uuidv4 } from "uuid";
import connectToDB from "@/utils/db";
import { User } from "@/models/User";
import bcryptjs from "bcryptjs";

const resend = new Resend(process.env.AUTH_RESEND_KEY);

export const POST = async (req) => {
  const { email } = await req.json();
  const rawToken = uuidv4();

  // Determine the base URL depending on the environment
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "APP_NAME";

  const magicLink = `${baseUrl}/redirect?email=${email}&token=${rawToken}`;

  try {
    // Save the token and email in the database
    await connectToDB();
    const hashedToken = await bcryptjs.hash(rawToken, 10);
    // Check if the user exists
    const existingUser = await User.findOne({ email });
    const isLogin = !!existingUser; // Flag to indicate if this is a login or registration
    const message = isLogin
      ? "Welcome back! Click the link below to log in to your account."
      : "Thanks for joining APP_NAME! Click the link below to verify your email.";

    // If the user exists, we're handling login; if not, we're handling registration
    if (existingUser) {
      // Update token and expiration for an existing user
      existingUser.token = hashedToken;
      existingUser.tokenExpiration = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
      await existingUser.save();
    } else {
      // Create a new user with token and expiration
      const newUser = await User.create({
        email: email,
        token: hashedToken,
        tokenExpiration: new Date(Date.now() + 10 * 60 * 1000),
      });
    }

    //Send the email
    await resend.emails.send({
      from: "APP_NAME",
      to: email,
      subject: isLogin ? "Log in to APP_NAME" : "Verify your APP_NAME Account",
      react: Email({ magicLink, message, isLogin }), // Ensure RegisterEmail can accept props for magic link
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
};
