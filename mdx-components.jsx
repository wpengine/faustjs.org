import Image from "next/image";
import Heading from "@/components/heading";
import CustomLink from "@/components/link";

export function useMDXComponents(components) {
	return {
		img: ({ src, alt }, ...props) => (
			<Image
				alt={alt}
				blurDataURL={src.blurDataURL}
				height={src.height}
				placeholder="blur"
				src={src.src}
				style={{ width: "100%", height: "auto" }}
				width={src.width}
				{...props}
			/>
		),
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
