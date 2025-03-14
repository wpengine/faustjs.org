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

## Documentation Docs

Docs are MDX in the `docs` folder. Here are a couple things you should know!

1.  Our MDX supports [Github Flavored Markdown](https://github.github.com/gfm/) (GFM).
2.  Images should be stored along side the doc that uses them.
3.  Shared Images can be stored in a shared folder @ `docs/images`
4.  [Callouts](https://github.com/lin-stephanie/rehype-callouts?tab=readme-ov-file#rehype-callouts): These are similar to block quotes or an aside but for various warnings, info, pro times, etc.
5.  Code Blocks:

    - Required
      1. Specify a language: ` ```js ` or `` `const inlineCode = [1,2,3];{:js}` ``
         - Commands for a users terminal = `bash`
         - env files = `ini`
         - JavaScript = `js`
         - TypeScript = `ts`
         - GraphQL = `gql`
         - JSON = `json`
         - For a full list see: https://shiki.style/languages
      2. Add [line numbers](https://rehype-pretty.pages.dev/#line-numbers) to any complex code. `ini` and `bash` don't need to show line numbers generally. ` ```js showLineNumbers`
      3. Complete files should have a [file names](https://rehype-pretty.pages.dev/#titles) ` ```js title="pages/_app.js`
    - Optional

      1.  Lines can be [highlighted](https://rehype-pretty.pages.dev/#highlight-lines) in code blocks ` ```js {1,3-5}`. There are a variety of advanced highlighting methods, see: https://rehype-pretty.pages.dev/#highlight-lines
      2.  Lines may be [diffed](https://shiki.style/packages/transformers#transformernotationdiff) in a code block:

              ```js
              console.log('hewwo') // [!code --]
              console.log('hello') // [!code ++]
              console.log('goodbye')
              ```
