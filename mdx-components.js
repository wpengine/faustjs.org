import Image from "next/image";
import Link from "next/link";
import DocsLayout from "./src/components/docs-layout";
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
		a: ({ href, children, ...props }) => {
			const className = "";

			if (href?.startsWith("/")) {
				return (
					<Link href={href} className={className} {...props}>
						{children}
					</Link>
				);
			}
			if (href?.startsWith("#")) {
				return (
					<a href={href} className={className} {...props}>
						{children}
					</a>
				);
			}
			return (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className={className}
					{...props}
				>
					{children}
				</a>
			);
		},
		wrapper: DocsLayout,
		...components,
	};
}
