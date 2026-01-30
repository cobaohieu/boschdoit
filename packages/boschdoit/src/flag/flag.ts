function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

export namespace Flag {
  export const BOSCHDOIT_AUTO_SHARE = truthy("BOSCHDOIT_AUTO_SHARE")
  export const BOSCHDOIT_GIT_BASH_PATH = process.env["BOSCHDOIT_GIT_BASH_PATH"]
  export const BOSCHDOIT_CONFIG = process.env["BOSCHDOIT_CONFIG"]
  export declare const BOSCHDOIT_CONFIG_DIR: string | undefined
  export const BOSCHDOIT_CONFIG_CONTENT = process.env["BOSCHDOIT_CONFIG_CONTENT"]
  export const BOSCHDOIT_DISABLE_AUTOUPDATE = truthy("BOSCHDOIT_DISABLE_AUTOUPDATE")
  export const BOSCHDOIT_DISABLE_PRUNE = truthy("BOSCHDOIT_DISABLE_PRUNE")
  export const BOSCHDOIT_DISABLE_TERMINAL_TITLE = truthy("BOSCHDOIT_DISABLE_TERMINAL_TITLE")
  export const BOSCHDOIT_PERMISSION = process.env["BOSCHDOIT_PERMISSION"]
  export const BOSCHDOIT_DISABLE_DEFAULT_PLUGINS = truthy("BOSCHDOIT_DISABLE_DEFAULT_PLUGINS")
  export const BOSCHDOIT_DISABLE_LSP_DOWNLOAD = truthy("BOSCHDOIT_DISABLE_LSP_DOWNLOAD")
  export const BOSCHDOIT_ENABLE_EXPERIMENTAL_MODELS = truthy("BOSCHDOIT_ENABLE_EXPERIMENTAL_MODELS")
  export const BOSCHDOIT_DISABLE_AUTOCOMPACT = truthy("BOSCHDOIT_DISABLE_AUTOCOMPACT")
  export const BOSCHDOIT_DISABLE_MODELS_FETCH = truthy("BOSCHDOIT_DISABLE_MODELS_FETCH")
  export const BOSCHDOIT_DISABLE_CLAUDE_CODE = truthy("BOSCHDOIT_DISABLE_CLAUDE_CODE")
  export const BOSCHDOIT_DISABLE_CLAUDE_CODE_PROMPT =
    BOSCHDOIT_DISABLE_CLAUDE_CODE || truthy("BOSCHDOIT_DISABLE_CLAUDE_CODE_PROMPT")
  export const BOSCHDOIT_DISABLE_CLAUDE_CODE_SKILLS =
    BOSCHDOIT_DISABLE_CLAUDE_CODE || truthy("BOSCHDOIT_DISABLE_CLAUDE_CODE_SKILLS")
  export declare const BOSCHDOIT_DISABLE_PROJECT_CONFIG: boolean
  export const BOSCHDOIT_FAKE_VCS = process.env["BOSCHDOIT_FAKE_VCS"]
  export const BOSCHDOIT_CLIENT = process.env["BOSCHDOIT_CLIENT"] ?? "cli"
  export const BOSCHDOIT_SERVER_PASSWORD = process.env["BOSCHDOIT_SERVER_PASSWORD"]
  export const BOSCHDOIT_SERVER_USERNAME = process.env["BOSCHDOIT_SERVER_USERNAME"]

  // Experimental
  export const BOSCHDOIT_EXPERIMENTAL = truthy("BOSCHDOIT_EXPERIMENTAL")
  export const BOSCHDOIT_EXPERIMENTAL_FILEWATCHER = truthy("BOSCHDOIT_EXPERIMENTAL_FILEWATCHER")
  export const BOSCHDOIT_EXPERIMENTAL_DISABLE_FILEWATCHER = truthy("BOSCHDOIT_EXPERIMENTAL_DISABLE_FILEWATCHER")
  export const BOSCHDOIT_EXPERIMENTAL_ICON_DISCOVERY =
    BOSCHDOIT_EXPERIMENTAL || truthy("BOSCHDOIT_EXPERIMENTAL_ICON_DISCOVERY")
  export const BOSCHDOIT_EXPERIMENTAL_DISABLE_COPY_ON_SELECT = truthy("BOSCHDOIT_EXPERIMENTAL_DISABLE_COPY_ON_SELECT")
  export const BOSCHDOIT_ENABLE_EXA =
    truthy("BOSCHDOIT_ENABLE_EXA") || BOSCHDOIT_EXPERIMENTAL || truthy("BOSCHDOIT_EXPERIMENTAL_EXA")
  export const BOSCHDOIT_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS = number("BOSCHDOIT_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS")
  export const BOSCHDOIT_EXPERIMENTAL_OUTPUT_TOKEN_MAX = number("BOSCHDOIT_EXPERIMENTAL_OUTPUT_TOKEN_MAX")
  export const BOSCHDOIT_EXPERIMENTAL_OXFMT = BOSCHDOIT_EXPERIMENTAL || truthy("BOSCHDOIT_EXPERIMENTAL_OXFMT")
  export const BOSCHDOIT_EXPERIMENTAL_LSP_TY = truthy("BOSCHDOIT_EXPERIMENTAL_LSP_TY")
  export const BOSCHDOIT_EXPERIMENTAL_LSP_TOOL = BOSCHDOIT_EXPERIMENTAL || truthy("BOSCHDOIT_EXPERIMENTAL_LSP_TOOL")
  export const BOSCHDOIT_DISABLE_FILETIME_CHECK = truthy("BOSCHDOIT_DISABLE_FILETIME_CHECK")
  export const BOSCHDOIT_EXPERIMENTAL_PLAN_MODE = BOSCHDOIT_EXPERIMENTAL || truthy("BOSCHDOIT_EXPERIMENTAL_PLAN_MODE")
  export const BOSCHDOIT_EXPERIMENTAL_MARKDOWN = truthy("BOSCHDOIT_EXPERIMENTAL_MARKDOWN")
  export const BOSCHDOIT_MODELS_URL = process.env["BOSCHDOIT_MODELS_URL"]

  function number(key: string) {
    const value = process.env[key]
    if (!value) return undefined
    const parsed = Number(value)
    return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined
  }
}

// Dynamic getter for BOSCHDOIT_DISABLE_PROJECT_CONFIG
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "BOSCHDOIT_DISABLE_PROJECT_CONFIG", {
  get() {
    return truthy("BOSCHDOIT_DISABLE_PROJECT_CONFIG")
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for BOSCHDOIT_CONFIG_DIR
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "BOSCHDOIT_CONFIG_DIR", {
  get() {
    return process.env["BOSCHDOIT_CONFIG_DIR"]
  },
  enumerable: true,
  configurable: false,
})
