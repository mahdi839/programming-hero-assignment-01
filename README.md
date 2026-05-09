# Assignment 1 — TypeScript practice

This project is a minimal TypeScript setup for practice.

Commands

- Install dependencies (already done if you used the setup):

  npm install --save-dev typescript ts-node @types/node

- Build:

  npm run build

- Run compiled JS:

  npm start

- Run directly with ts-node (dev):

  npm run dev

- Run a single TypeScript file at the repository root (no src/dist required):

  npm run dev-file

Or run with Node using ts-node's register hook:

  npm run start-file

Notes

- Source files are in `src/` and compiled output goes to `dist/`.
- `tsconfig.json` targets ES2020 and outputs CommonJS modules.
