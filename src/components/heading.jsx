import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "./link";

// Custom heading component with clickable anchor links
export default function Heading({ level, children, id, ...props }) {
	const Tag = `h${level}`;
	return (
		<Tag
			id={id.toString()}
			className="group flex items-center break-words hover:text-blue-500"
			{...props}
		>
			<Link
				href={`#${id}`}
				className="no-underline transition-colors group-hover:text-blue-500"
				noDefaultStyles
			>
				{children}
				<LinkIcon className="ml-2 inline-block size-5" />
			</Link>
		</Tag>
	);
}
