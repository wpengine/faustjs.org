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

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
	...common,
	...browser,
	...node,
	...react,
	...jsxA11y,
	...next,
	{
		plugins: {
			// unicorn,
			// import: importPlugin,
		},
		settings: {
			react: {
				version: "detect",
			},
			// "import/resolver": {
			// 	alias: [["@", "./src"]],
			// },
		},
		languageOptions: {
			parserOptions: {
				project: "./jsconfig.json",
			},
		},
		rules: {
			// "react/react-in-jsx-scope": "off",
			"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
		},
		// rules: {
		// 	// ...unicorn.configs.recommended.rules,
		// 	// ...importPlugin.flatConfigs.recommended.rules,
		// },
	},
	{
		ignores: ["node_modules", ".next", ".faust", "public"],
	},
	{
		files: ["src/**/*.{js,mjs,jsx}", "mdx-components.js"],

		rules: {
			"react/prop-types": "off",
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
		files: ["tailwind.config.js", "postcss.config.js", "next.config.js"],
		languageOptions: {
			sourceType: "commonjs",
		},
		rules: {
			"unicorn/prefer-module": "off",
		},
	},
	{
		files: ["src/pages/**/*.{js,jsx}"],
		rules: {
			"unicorn/filename-case": ["off"],
		},
	},
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
