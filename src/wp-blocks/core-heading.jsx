import { gql } from "@apollo/client";
import { CoreBlocks } from "@faustwp/blocks";
import slugify from "@sindresorhus/slugify";

const { CoreHeading: FaustCoreHeading } = CoreBlocks;

export default function CoreHeading(props) {
	const { attributes } = props;

	const customAttributes = {
		...attributes,
		anchor: attributes.anchor || slugify(attributes.content),
	};

	return <FaustCoreHeading {...props} attributes={customAttributes} />;
}

CoreHeading.displayName = { ...FaustCoreHeading.displayName };
CoreHeading.config = { ...FaustCoreHeading.config };
/**
 * Faust's stock fragment requests `attributes.textAlign`, which no longer
 * exists on `CoreHeadingAttributes` in the CMS schema. GraphQL rejects the
 * whole document at validation time, so every blog post 500s. Neither the
 * component nor `getStyles` reads `textAlign` (alignment arrives via
 * `cssClassName`), so dropping the field changes nothing visually.
 */
CoreHeading.fragments = {
	key: "CoreHeadingBlockFragment",
	entry: gql`
		fragment CoreHeadingBlockFragment on CoreHeading {
			attributes {
				align
				anchor
				backgroundColor
				content
				fontFamily
				fontSize
				gradient
				level
				style
				textColor
				cssClassName
			}
		}
	`,
};
