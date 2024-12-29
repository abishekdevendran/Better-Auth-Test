import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "./db/schema";
import { PUBLIC_GOOGLE_CLIENT_ID } from "$env/static/public";
// import { BETTER_AUTH_URL, GOOGLE_CLIENT_SECRET } from "$env/static/private";
import { env } from '$env/dynamic/private';
import { oneTap } from "better-auth/plugins";

export const auth = betterAuth({
    appName: "Better Auth Test",
    baseURL: "http://localhost:5173",
    database: drizzleAdapter(db, {
        provider: "sqlite",
        schema
    }),
    emailAndPassword: {
        enabled: true,
        async sendResetPassword(url, user) {
            console.log("Reset password url:", url);
        },
    },
    socialProviders: {
        google: {
            clientId: PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        }
    },
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60 // Cache duration in seconds
        }
    },
    account: {
        accountLinking: {
            enabled: true, 
        }
    },
    plugins: [
        oneTap(),
    ]
})