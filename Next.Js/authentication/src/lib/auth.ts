import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { Resend } from "resend";

const client = new MongoClient(`${process.env.BETTER_AUTH_DB}`);
const db = client.db("better-auth-db");

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    socialProviders: {
        google: {
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET_KEY as string
        },
        github: {
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID as string,
            clientSecret: process.env.BETTER_AUTH_GITHUB_SECRET_KEY as string,
        }
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url }) => {
            void resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: user.email,
                subject: "Reset your password",
                html: `
                <h1>Please Verify Your Email </h1>
                Click <a href="${url}">here</a> to reset your password.
                `
            })
        },
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        expiresIn: 7 * 24 * 360 // 7 days valid
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: async ({ user, url, token }, request) => {
            void resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: user.email,
                subject: "Reset your password",
                html: `
                <h1>Reset Password</h1>

                <p>
                Click <a href="${url}">here</a> to reset your password.
                </p>
                `,
            })
        }
    },
    database: mongodbAdapter(db, {
        client
    })
});