import Link from "@/components/link";
import FaustLogo from "./faust-logo";
import PrimaryMenu from "./primary-menu";
import SearchBar from "./search-bar";
import HamburgerMenu from "./hamburger-menu";
import {
	SiDiscord,
	SiGithub,
	SiWordpress,
} from "@icons-pack/react-simple-icons";

export default function Header() {
	return (
		<header className="container mx-auto flex items-center justify-between bg-gray-900 px-4 py-6 sm:px-6 md:max-w-6xl md:px-8">
			<div className="flex items-center gap-8">
				<div className="flex items-center gap-3">
					<FaustLogo />
					<Link href="/" noDefaultStyles className="text-xl font-bold">
						Faust.js
						<span className="align-super text-xs font-light text-gray-500">
							&trade;
						</span>
					</Link>
				</div>
				<div className="hidden items-center lg:flex">
					<PrimaryMenu />
				</div>
			</div>
			<div className="flex items-center gap-5">
				<SearchBar />
				<HamburgerMenu className="lg:hidden" />
				<div className="hidden items-center space-x-4 lg:flex">
					<Link
						href="https://github.com/wpengine/faustjs"
						className="text-gray-500 hover:text-gray-400"
					>
						<SiGithub />
					</Link>
					<Link
						href="https://wordpress.org/plugins/faustwp/"
						className="text-gray-500 hover:text-gray-400"
					>
						<SiWordpress />
					</Link>
					<Link
						href="https://discord.gg/Ux73Pywj"
						className="text-gray-500 hover:text-gray-400"
					>
						<SiDiscord />
					</Link>
				</div>
			</div>
		</header>
	);
}
