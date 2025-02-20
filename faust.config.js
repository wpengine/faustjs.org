import { setConfig } from "@faustwp/core";
import possibleTypes from "./possibleTypes.json";
import templates from "./src/wp-templates";

/**
 * @type {import('@faustwp/core').FaustConfig}
 */
export default setConfig({
	templates,
	plugins: [],
	possibleTypes,
	usePersistedQueries: true,
});
