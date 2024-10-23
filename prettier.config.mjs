/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	semi: true,
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindFunctions: ["classnames"],
};

export default config;
