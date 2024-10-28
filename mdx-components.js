import Image from "next/image";
import DocsLayout from "@/components/docs-layout";
import CustomLink from "@/components/link";
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components) {
	return {
		// Allows customizing built-in components, e.g. to add styling.
		// pre: ({children, ...props}) => {
		//   return <pre {...props}>{children}</pre>
		// },
		// code: ({children, ...props}) => {
		//   console.log("code", props)
		//   return <code >{children}</code>
		// },
		img: ({ src }, ...props) => (
			<Image
				width={src.width}
				height={src.height}
				blurDataURL={src.blurDataURL}
				placeholder="blur"
				src={src.src}
				style={{ width: "100%", height: "auto" }}
				alt={props.alt}
			/>
		),
		a: (props) => <CustomLink {...props} />,
		wrapper: DocsLayout,
		...components,
	};
}
