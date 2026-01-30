<p align="center">
  <a href="https://boschdoit.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="BoschDoIt logo">
    </picture>
  </a>
</p>
<p align="center">The open source AI coding agent.</p>
<p align="center">
  <a href="https://boschdoit.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/boschdoit-ai"><img alt="npm" src="https://img.shields.io/npm/v/boschdoit-ai?style=flat-square" /></a>
  <a href="https://github.com/cobaohieu/boschdoit/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/cobaohieu/boschdoit/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
</p>

[![BoschDoIt Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://boschdoit.ai)

---

### Installation

```bash
# YOLO
curl -fsSL https://smplu.link/boschdoit | bash

# Package managers
npm i -g boschdoit-ai@latest        # or bun/pnpm/yarn
scoop install boschdoit             # Windows
choco install boschdoit             # Windows
brew install cobaohieu/tap/boschdoit # macOS and Linux (recommended, always up to date)
brew install boschdoit              # macOS and Linux (official brew formula, updated less)
paru -S boschdoit-bin               # Arch Linux
mise use -g boschdoit               # Any OS
nix run nixpkgs#boschdoit           # or github:cobaohieu/boschdoit for latest dev branch
```

> [!TIP]
> Remove versions older than 0.1.x before installing.

### Desktop App (BETA)

BoschDoIt is also available as a desktop application. Download directly from the [releases page](https://github.com/cobaohieu/boschdoit/releases) or [boschdoit.ai/download](https://boschdoit.ai/download).

| Platform              | Download                              |
| --------------------- | ------------------------------------- |
| macOS (Apple Silicon) | `boschdoit-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `boschdoit-desktop-darwin-x64.dmg`     |
| Windows               | `boschdoit-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm`, or AppImage           |

```bash
# macOS (Homebrew)
brew install --cask boschdoit-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/boschdoit-desktop
```

#### Installation Directory

The install script respects the following priority order for the installation path:

1. `$BOSCHDOIT_INSTALL_DIR` - Custom installation directory
2. `$XDG_BIN_DIR` - XDG Base Directory Specification compliant path
3. `$HOME/bin` - Standard user binary directory (if exists or can be created)
4. `$HOME/.boschdoit/bin` - Default fallback

```bash
# Examples
BOSCHDOIT_INSTALL_DIR=/usr/local/bin curl -fsSL https://smplu.link/boschdoit | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://smplu.link/boschdoit | bash
```

### Development

To develop BoschDoIt, you need [Bun](https://bun.sh) (v1.3+).

```bash
# Install Bun
brew install bun
for Ubuntu
curl -fsSL https://bun.com/install | bash

# Install dependencies
source ~/.bashrc 
bun install

# Run dev server
bun dev

# Optional: Add alias
alias boschdoit="bun dev"
echo 'alias boschdoit="cd /path/to/boschdoit && bun dev"' >> ~/.bashrc
source ~/.bashrc
```

For more details, see [CONTRIBUTING.md](CONTRIBUTING.md).

### Agents

BoschDoIt includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also, included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

Learn more about [agents](https://boschdoit.ai/docs/agents).

### Documentation

For more info on how to configure BoschDoIt [**head over to our docs**](https://boschdoit.ai/docs).

### Contributing

If you're interested in contributing to BoschDoIt, please read our [contributing docs](./CONTRIBUTING.md) before submitting a pull request.

### Building on BoschDoIt

If you are working on a project that's related to BoschDoIt and is using "boschdoit" as a part of its name; for example, "boschdoit-dashboard" or "boschdoit-mobile", please add a note to your README to clarify that it is not built by the BoschDoIt team and is not affiliated with us in any way.

### FAQ

#### How is this different from Claude Code?

It's very similar to Claude Code in terms of capability. Here are the key differences:

- 100% open source
- Not coupled to any provider. Although we recommend the models we provide through [BoschDoIt Zen](https://boschdoit.ai/zen); BoschDoIt can be used with Claude, OpenAI, Google or even local models. As models evolve the gaps between them will close and pricing will drop so being provider-agnostic is important.
- Out of the box LSP support
- A focus on TUI. BoschDoIt is built by neovim users and the creators of [terminal.shop](https://terminal.shop); we are going to push the limits of what's possible in the terminal.
- A client/server architecture. This for example can allow BoschDoIt to run on your computer, while you can drive it remotely from a mobile app. Meaning that the TUI frontend is just one of the possible clients.

---

**Join our community** [Discord](https://discord.gg/boschdoit) | [X.com](https://x.com/boschdoit)
