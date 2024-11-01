// import next from "@next/eslint-plugin-next";
import {
	common,
	browser,
	node,
	next,
	react,
	prettier,
} from "eslint-config-neon";
import jsxA11y from "eslint-config-neon/jsx-a11y";
import * as mdx from "eslint-plugin-mdx";
// eslint-disable-next-line import-x/no-extraneous-dependencies -- we want the version of unicorn that is bundled with eslint-config-neon
import unicorn from "eslint-plugin-unicorn";

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
	{
		ignores: ["node_modules", ".next", ".faust", "public"],
	},
	...common,
	...browser,
	...node,
	...react,
	...jsxA11y,
	...next,
	{
		files: ["**/*.{js,jsx,cjs,mjs}"],
		settings: {
			react: {
				version: "detect",
			},
		},
		languageOptions: {
			parserOptions: {
				project: "./jsconfig.json",
			},
		},
		rules: {
			"react/prop-types": "off",
			...unicorn.configs["flat/recommended"].rules, // neno disables a lot of unicorn rules so this reenables defaults
			"react/no-danger": "warn",
			"unicorn/prevent-abbreviations": [
				"error",
				{
					allowList: {
						props: true,
						ctx: true,
						docs: true,
						doc: true,
						Doc: true,
						Docs: true,
					},
				},
			],
		},
	},

	{
		files: ["**/*.jsx"],
		rules: {
			"consistent-return": "off",
			"no-use-before-define": "off",
			"array-callback-return": "off",
		},
	},
	{
		files: ["tailwind.config.js", "postcss.config.js", "next.config.js"],
		languageOptions: {
			sourceType: "commonjs",
		},
		rules: {
			"unicorn/numeric-separators-style": "off",
			"unicorn/prefer-module": "off",
		},
	},
	// {
	// 	files: ["src/pages/**/*.{js,jsx}"],
	// 	rules: {
	// 		"unicorn/filename-case": ["off"],
	// 	},
	// },
	{
		...mdx.flat,
		processor: mdx.createRemarkProcessor({
			lintCodeBlocks: false,
		}),
	},
	{
		files: ["*.md"],
		rules: {
			"unicorn/filename-case": ["off"],
		},
	},
	...prettier,
];

export default config;
