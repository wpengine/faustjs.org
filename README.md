# faustjs.org (work in progress)

Frontend for the [faustjs.org](https://faustjs.org/) website.

## Linting and Formatting

Linting - checks for potential errors and code style. i.e. eslint
Formatting - checks for spaces, line length, etc. i.e prittier

Both are run agaist staged files on commit. If it's failing for a good reaason and you need to bypass you can use the `--no-verify` or `-n` flag. `git commit -nm "my message"`

## Documentation Docs
Docs are MDX in the `docs` folder. Here are a couple things you should know!

1. Images should be stored along side the doc that uses them.
2. Shared Images can be stored in a shared folder @ `docs/images`
3. Code Blocks:
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
      1. Lines can be [highlighted](https://rehype-pretty.pages.dev/#highlight-lines) in code blocks ` ```js {1,3-5}`. There are a variety of advanced highlighting methods, see: https://rehype-pretty.pages.dev/#highlight-lines
      2. Lines may be [diffed](https://shiki.style/packages/transformers#transformernotationdiff) in a code block:

				```js
				console.log('hewwo') // [!code --]
				console.log('hello') // [!code ++]
				console.log('goodbye')
				```
