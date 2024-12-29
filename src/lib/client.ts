import { PUBLIC_BASE_URL, PUBLIC_GOOGLE_CLIENT_ID } from "$env/static/public"
import { oneTapClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/svelte" // make sure to import from better-auth/svelte

export const authClient = createAuthClient({
    baseURL: "http://localhost:5173",
    plugins: [
        oneTapClient({
            clientId: PUBLIC_GOOGLE_CLIENT_ID
        })
    ]
})