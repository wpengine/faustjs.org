import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { classNames } from "@/utils/strings";

const HamburgerMenu = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={classNames("relative", className)} id="mobile-menu">
			<button
				className="md: text-gray-400 hover:text-gray-300 focus:outline-none"
				onClick={toggleMenu}
			>
				<Bars3Icon className="h-6 w-6" />
			</button>
			{isOpen && (
				<div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-gray-800 shadow-lg">
					<Link
						className="block rounded-t-md px-4 py-2 text-gray-300 hover:bg-gray-700"
						href="/option1"
					>
						Option 1
					</Link>
					<Link
						className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
						href="/option2"
					>
						Option 2
					</Link>
					<Link
						className="block rounded-b-md px-4 py-2 text-gray-300 hover:bg-gray-700"
						href="/option3"
					>
						Option 3
					</Link>
				</div>
			)}
		</div>
	);
};

export default HamburgerMenu;
