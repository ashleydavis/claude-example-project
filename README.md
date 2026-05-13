# claude-example-project

An example project that demonstrates configuration for Claude Code.

## Requirements

- [mise](https://mise.jdx.dev/) for Node.js version management
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) to explore the Claude Code configuration

## Setup

```bash
mise install
npm install
```

## Starting Claude Code

```bash
claude
```

## Usage

```bash
npm start
```

## Testing

```bash
npm test
```

## Claude Configuration

- **[CLAUDE.md](CLAUDE.md)** 
    - Instructions about this project for Claude's information.
    - Keep this small, unecessary information here pollutes your context for no good reason.

- **[.claude/settings.json](.claude/settings.json)** 
    - Claude Code configuration
        - A hook that runs automated tests.
        - Permissions allowing `npm start` and `npm test`.
        - Auto-memory is disabled:
            - It accumulates noise in your context.
            - The files are invisible (unlike `CLAUDE.md`, which you can read and commit).
            - It banks up random rules from ad-hoc tasks that become annoying over time; and
            - The knowledge is siloed on one machine rather than shared via version control.

- **[.claude/commands/](.claude/commands/)** 
    - Custom skills (slash commands) available to Claude. 
    - For example, [verify.md](.claude/commands/verify.md) runs all quality checks in sequence.
