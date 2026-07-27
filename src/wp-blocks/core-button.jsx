import { gql } from "@apollo/client";
import { CoreBlocks } from "@faustwp/blocks";

const { CoreButton: FaustCoreButton } = CoreBlocks;

export default function CoreButton(props) {
	return <FaustCoreButton {...props} />;
}

CoreButton.displayName = { ...FaustCoreButton.displayName };
CoreButton.config = { ...FaustCoreButton.config };

/**
 * Faust's stock fragment requests `attributes.textAlign`, which no longer
 * exists on `CoreButtonAttributes` in the CMS schema. GraphQL rejects the
 * whole document at validation time, so every blog post 500s. Neither the
 * component nor `getStyles` reads `textAlign` (alignment arrives via
 * `cssClassName`), so dropping the field changes nothing visually.
 */
CoreButton.fragments = {
	key: "CoreButtonBlockFragment",
	entry: gql`
		fragment CoreButtonBlockFragment on CoreButton {
			attributes {
				anchor
				gradient
				text
				textColor
				style
				fontSize
				fontFamily
				linkTarget
				rel
				url
				backgroundColor
				cssClassName
				linkClassName
			}
		}
	`,
};
