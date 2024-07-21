declare module "process" {
    global {
        namespace NodeJS {
            interface ProcessEnv {
                /** @param ConvexのプロジェクトID */
                CONVEX_DEPLOYMENT: string
                /** @param ConvexのデプロイURL */
                NEXT_PUBLIC_CONVEX_URL: string,
                /** @param デプロイ先のURL */
                CONVEX_SITE_URL: string,

                /** @param SpotifyのAPIを使うためのID */
                SPOTIFY_CLIENT_ID: string,
                /** @param SpotifyのAPIを使うための隠しトークン */
                SPOTIFY_CLIENT_SECRET: string,

                /** @param ClerkのIssuerのURL */
                CLERK_ISSUER_URL: string,
                /** @params CLERKのPublish Key */
                NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string,
                /** @param ClerkのSecretKey */
                CLERK_SECRET_KEY: string
                /** @param ログイン後に飛ぶページを決める */
                NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL: string
                /** @param サインアップ後に飛ぶページを決める */
                NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL: string

                /** @param Vercelにデプロイした先の公開URL */
                NEXT_PUBLIC_VERCEL_URL: string

                /** @param Gemini_API_Key */
                NEXT_PUBLIC_GEMINI_API_KEY: string
            }
        }
    }
}