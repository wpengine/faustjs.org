import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { classNames } from "@/utils/strings";

export default function CustomLink({
	href,
	children,
	className,
	noDefaultStyles,
	disableExternalIcon,
	props,
}) {
	const defaultClasses = "underline text-blue-500";

	const calculatedClasses = classNames(
		{ [defaultClasses]: !noDefaultStyles },
		className,
	);

	if (href.startsWith("http")) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={calculatedClasses}
				{...props}
			>
				{children}
				{!disableExternalIcon && (
					<span>
						<ArrowTopRightOnSquareIcon className="inline h-4 w-4 align-text-top" />
					</span>
				)}
			</a>
		);
	}

	if (href?.startsWith("#")) {
		return (
			<a href={href} className={calculatedClasses} {...props}>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} className={calculatedClasses} {...props}>
			{children}
		</Link>
	);
}
