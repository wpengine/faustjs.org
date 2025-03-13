# faustjs.org

Frontend for the [faustjs.org](https://faustjs.org/) website.

# Prerequisites

- [`nvm` (Node Version Manager)](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- Cloned repository

## Getting started

```bash
$ nvm install		# Install the correct version of node
$ corepack enable 	# Enable Corepack
$ corepack install	# Install `pnpm` via Corepack
$ pnpm install		# Install project dependencies via `pnpm`
$ pnpm dev 			# Start dev server; See `scripts` in `package.json` for more
```

## PNPM Package Manager

```bash
corepack enable
corepack install
```

This project users [pnpm](https://pnpm.io/). While not significantly different than `npm` here are some basic differences and I'd recommend you checkout the [`pnpm` docs](https://pnpm.io/) for more info.

- `npm run dev` => `pnpm dev` or `pnpm run dev` :: commands can be shortened, or use your muscle memory
- `npx` => `pnpx` or `pnpm dlx` :: either way it still works
- `pnpm update` :: a whole suite of [native tools](https://pnpm.io/cli/update) to manage dependencies. No need for 3rd party tools to update dependencies.

## Linting and Formatting

Linting - checks for potential errors and code style. i.e. eslint
Formatting - checks for spaces, line length, etc. i.e prettier

Both are run against staged files on commit. If it's failing for a good reason and you need to bypass you can use the `--no-verify` or `-n` flag. `git commit -nm "my message"`

## Editing content

- Docs: [Located in the `faustjs` Repo under `/docs`](https://github.com/wpengine/faustjs/tree/canary/docs)\
- Blog Posts & Pages: [Located in the headless WordPress CMS](https://cms.faustjs.org/wp-admin)
- [Home Page](src/pages/index.jsx)
- [Showcase](src/pages/showcase/index.jsx)
- [Main Navigation](src/components/primary-nav.jsx)
