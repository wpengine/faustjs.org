import { relayStylePagination } from "@apollo/client/utilities";
import { setConfig } from "@faustwp/core";
import possibleTypes from "./possibleTypes.json";
import templates from "./src/wp-templates";

class PostTypePolicyPlugin {
	apply({ addFilter }) {
		addFilter(
			"apolloClientInMemoryCacheOptions",
			"faust",
			(inMemoryCacheObject) => {
				// Merge existing Faust typePolicies with with relayStylePagination for Posts
				const existingPolicies = inMemoryCacheObject.typePolicies || {};

				return {
					...inMemoryCacheObject,
					typePolicies: {
						...existingPolicies,
						Query: {
							...existingPolicies.Query,
							fields: {
								posts: relayStylePagination(),
							},
						},
					},
				};
			},
		);
	}
}

/**
 * @type {import('@faustwp/core').FaustConfig}
 */
export default setConfig({
	templates,
	plugins: [new PostTypePolicyPlugin()],
	possibleTypes,
	usePersistedQueries: true,
});
