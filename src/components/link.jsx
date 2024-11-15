import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { forwardRef } from "react";
import { classNames } from "@/utils/strings";

const CustomLink = forwardRef(
	(
		{
			href,
			children,
			className,
			noDefaultStyles,
			disableExternalIcon,
			...props
		},
		reference,
	) => {
		const defaultClasses = "text-blue-500";
		const calculatedClasses = classNames(
			{ [defaultClasses]: !noDefaultStyles },
			className,
		);

		if (href.startsWith("http") || href === "/discord") {
			return (
				<a
					className={calculatedClasses}
					href={href}
					rel="noopener noreferrer"
					target="_blank"
					ref={reference}
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
				<a className={calculatedClasses} href={href} {...props} ref={reference}>
					{children}
				</a>
			);
		}

		return (
			<Link
				className={calculatedClasses}
				href={href}
				{...props}
				ref={reference}
			>
				{children}
			</Link>
		);
	},
);

export default CustomLink;
