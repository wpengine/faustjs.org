/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	semi: true,
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindFunctions: ["classNames"],
};

export default config;
