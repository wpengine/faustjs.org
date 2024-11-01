import Link from "@/components/link";
import FaustLogo from "./faust-logo";
import PrimaryMenu from "./primary-menu";
import SearchBar from "./search-bar";
import {
	SiDiscord,
	SiGithub,
	SiWordpress,
} from "@icons-pack/react-simple-icons";

const socialIcons = [
	{
		name: "GitHub",
		url: "https://github.com/wpengine/faustjs",
		icon: SiGithub,
	},
	{
		name: "WordPress",
		url: "https://wordpress.org/plugins/faustwp/",
		icon: SiWordpress,
	},
	{
		name: "Discord",
		url: "/discord",
		icon: SiDiscord,
	},
];

export default function Header() {
	return (
		<header className="container mx-auto flex items-center justify-between bg-gray-900 px-4 py-6 sm:px-6 md:max-w-6xl md:px-8">
			<div className="flex items-center gap-8">
				<Link
					href="/"
					noDefaultStyles
					className="transition-duration-75 flex items-center text-xl font-bold transition hover:text-white focus:text-white"
				>
					<span className="mr-3">
						<FaustLogo />
					</span>
					Faust.js
					<span className="align-super text-xs font-light text-gray-500">
						&trade;
					</span>
				</Link>
			</div>
			<div className="flex items-center gap-5">
				<SearchBar />
				<div className="items-center lg:flex">
					<PrimaryMenu />
				</div>
				<div className="hidden items-center space-x-4 lg:flex">
					{socialIcons.map(({ url, name, icon: Icon }) => (
						<Link
							key={name}
							href={url}
							title={name}
							className="text-gray-500 hover:text-gray-400"
							disableExternalIcon
						>
							<Icon />
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}
