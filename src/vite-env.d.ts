/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL?: string
    readonly VITE_DEV_TEAM_CODE?: string
    readonly VITE_DEV_EMAIL?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
