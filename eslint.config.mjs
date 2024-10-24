import next from "@next/eslint-plugin-next";
import unicorn from "eslint-plugin-unicorn";
import prettier from "eslint-config-prettier";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import mdx from "eslint-plugin-mdx";

import globals from "globals";

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
	js.configs.recommended,
	react.configs.flat.recommended, // This is not a plugin object, but a shareable config object
	react.configs.flat["jsx-runtime"],
	// importPlugin.flatConfigs.recommended,
	{
		plugins: {
			unicorn,
			prettier,
		},
		rules: {
			...unicorn.configs.recommended.rules,
		},
	},
	{
		ignores: ["node_modules", ".next", ".faust", "public"],
	},
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.serviceworker,
			},
		},
	},
	{
		files: ["src/**/*.{js,jsx}"],
		plugins: {
			"@next/next": next,
			"react-hooks": reactHooks,
			"jsx-a11y": jsxA11y,
		},
		rules: {
			...next.configs.recommended.rules,
			...next.configs["core-web-vitals"].rules,
			...reactHooks.configs.recommended.rules,
			...jsxA11y.flatConfigs.recommended.rules,
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
];
