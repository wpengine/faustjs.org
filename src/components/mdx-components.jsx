import Heading from "@/components/heading";
import CustomLink from "@/components/link";

export function getMDXComponents(components) {
	return {
		a: (props) => <CustomLink {...props} />,
		h1: (props) => <Heading level={1} {...props} />,
		h2: (props) => <Heading level={2} {...props} />,
		h3: (props) => <Heading level={3} {...props} />,
		h4: (props) => <Heading level={4} {...props} />,
		h5: (props) => <Heading level={5} {...props} />,
		h6: (props) => <Heading level={6} {...props} />,
		...components,
	};
}
