import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import FaustLogo from "./faust-logo";
import PrimaryNav from "./primary-nav";
import Search from "./search/search";
import Link from "@/components/link";
import { classNames } from "@/utils/strings";

const socialIcons = [
	{
		name: "GitHub",
		url: "https://github.com/wpengine/faustjs",
		icon: SiGithub,
	},
	{
		name: "Discord",
		url: "/discord",
		icon: SiDiscord,
	},
];

export default function Header() {
	return (
		<div
			className={classNames(
				"container-blur-bg top-0 border-b-[1px] border-gray-800 bg-gray-900/80",
				"sticky z-10",
			)}
		>
			<header className="container mx-auto flex items-center justify-between px-4 py-6 sm:px-6 md:max-w-6xl md:px-8">
				<div className="mr-8 flex items-center gap-8">
					<Link
						className="transition-duration-75 flex items-center text-xl font-bold transition hover:text-white focus:text-white"
						href="/"
						noDefaultStyles
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
				<div className="flex items-center gap-5 md:w-full md:justify-between">
					<PrimaryNav />
					<span className="flex gap-5">
						<Search />
						<div className="hidden items-center space-x-4 md:flex">
							{socialIcons.map(({ url, name, icon: Icon }) => (
								<Link
									className="text-gray-500 hover:text-gray-400"
									disableExternalIcon
									href={url}
									key={name}
									title={name}
								>
									<Icon className="h-6 w-6" />
								</Link>
							))}
						</div>
					</span>
				</div>
			</header>
		</div>
	);
}
