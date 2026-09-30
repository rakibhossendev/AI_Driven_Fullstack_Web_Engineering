import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(`${process.env.BETTER_AUTH_DB}`);
const db = client.db("better-auth-db");


export const auth = betterAuth({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    socialProviders:{
        google:{
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET_KEY as string
        },
        github:{
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID as string,
            clientSecret: process.env.BETTER_AUTH_GITHUB_SECRET_KEY as string,
        }
    },
    emailAndPassword: {
        enabled: true
    },
    database: mongodbAdapter(db,{
        client
    })
});