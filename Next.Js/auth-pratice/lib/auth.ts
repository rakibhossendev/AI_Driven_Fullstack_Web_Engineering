import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { Resend } from "resend";

const client = new MongoClient(`${process.env.BETTER_AUTH_MONGODB_URL}`);
const db = client.db("practice-db");

const resend = new Resend(process.env.RESEND_API_KE);

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),

    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url }) => {
            void resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: user.email,
                subject: "Verify Your Email",
                html: `
  <div style="
    margin: 0;
    padding: 40px 20px;
    background-color: #f8fafc;
    font-family: Arial, Helvetica, sans-serif;
  ">
    <div style="
      max-width: 520px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e4e4e7;
      border-radius: 16px;
      padding: 40px 32px;
    ">
      
      <div style="text-align: center;">
        <div style="
          display: inline-block;
          padding: 10px 14px;
          border-radius: 12px;
          background-color: #eff6ff;
          color: #2563eb;
          font-size: 20px;
          font-weight: bold;
        ">
          ✦
        </div>

        <h1 style="
          margin: 24px 0 10px;
          color: #18181b;
          font-size: 26px;
          line-height: 1.3;
        ">
          Verify your email
        </h1>

        <p style="
          margin: 0;
          color: #71717a;
          font-size: 15px;
          line-height: 1.7;
        ">
          Thanks for creating an account with us.
          Please verify your email address to complete your registration.
        </p>
      </div>

      <div style="
        margin: 30px 0;
        text-align: center;
      ">
        <a
          href="${url}"
          style="
            display: inline-block;
            padding: 13px 24px;
            background-color: #18181b;
            color: #ffffff;
            text-decoration: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 600;
          "
        >
          Verify Email
        </a>
      </div>

      <p style="
        margin: 0;
        color: #a1a1aa;
        font-size: 13px;
        line-height: 1.6;
        text-align: center;
      ">
        If you didn't create an account, you can safely ignore this email.
      </p>

      <div style="
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #f4f4f5;
        text-align: center;
      ">
        <p style="
          margin: 0;
          color: #a1a1aa;
          font-size: 12px;
        ">
          This verification link will expire for security reasons.
        </p>
      </div>

    </div>
  </div>
`
            })
        },
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        expiresIn: 7 * 24 * 360 // 7 days
    }

})