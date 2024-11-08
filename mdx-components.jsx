import slugify from "@sindresorhus/slugify";
import Image from "next/image";
import DocsLayout from "@/components/docs-layout";
import CustomLink from "@/components/link";

// Custom heading component with clickable anchor links
const Heading = ({ level, children, ...props }) => {
	const Tag = `h${level}`;
	// Ensure children are treated as a single string for slug generation
	const textContent = Array.isArray(children)
		? children.join("") // Join array items if children is an array
		: children?.toString() || ""; // Convert children to string or fallback to empty
	const id = slugify(textContent); // Generate slug from heading text

	return (
		<Tag id={id} {...props} className="group">
			<CustomLink href={`#${id}`} className="text-blue-500 no-underline">
				{children}
			</CustomLink>
		</Tag>
	);
};

export function useMDXComponents(components) {
	return {
		img: ({ src }, ...props) => (
			<Image
				alt={props.alt}
				blurDataURL={src.blurDataURL}
				height={src.height}
				placeholder="blur"
				src={src.src}
				style={{ width: "100%", height: "auto" }}
				width={src.width}
			/>
		),
		a: (props) => <CustomLink {...props} />,
		wrapper: DocsLayout,
		h1: (props) => <Heading level={1} {...props} />,
		h2: (props) => <Heading level={2} {...props} />,
		h3: (props) => <Heading level={3} {...props} />,
		h4: (props) => <Heading level={4} {...props} />,
		h5: (props) => <Heading level={5} {...props} />,
		h6: (props) => <Heading level={6} {...props} />,
		...components,
	};
}
