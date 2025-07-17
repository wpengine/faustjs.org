import { HiOutlineLink } from "react-icons/hi2";
import Link from "./link";

// Custom heading component with clickable anchor links
export default function Heading({ level, children, id, ...props }) {
	const Tag = `h${level}`;
	return (
		<Tag
			id={id.toString()}
			className="group flex items-center hover:text-blue-500"
			{...props}
		>
			<Link
				href={`#${id}`}
				className="break-all no-underline transition-colors group-hover:text-blue-500"
				noDefaultStyles
			>
				{children}
				<HiOutlineLink className="ml-2 inline-block size-5" />
			</Link>
		</Tag>
	);
}
