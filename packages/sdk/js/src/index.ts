export * from "./client.js"
export * from "./server.js"

import { createBoschdoitClient } from "./client.js"
import { createBoschdoitServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createBoschdoit(options?: ServerOptions) {
  const server = await createBoschdoitServer({
    ...options,
  })

  const client = createBoschdoitClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
