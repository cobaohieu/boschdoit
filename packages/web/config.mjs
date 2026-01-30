const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://boschdoit.ai" : `https://${stage}.boschdoit.ai`,
  console: stage === "production" ? "https://boschdoit.ai/auth" : `https://${stage}.boschdoit.ai/auth`,
  email: "contact@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/cobaohieu/boschdoit",
  discord: "https://boschdoit.ai/discord",
  headerLinks: [
    { name: "Home", url: "/" },
    { name: "Docs", url: "/docs/" },
  ],
}
