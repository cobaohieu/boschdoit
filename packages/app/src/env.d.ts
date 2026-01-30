interface ImportMetaEnv {
  readonly VITE_BOSCHDOIT_SERVER_HOST: string
  readonly VITE_BOSCHDOIT_SERVER_PORT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
