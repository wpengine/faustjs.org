import Header from "./header";
import Footer from "./footer";

import localFont from "next/font/local";

const inter = localFont({
	src: "../../public/fonts/inter-variable-font.woff2",
	display: "swap",
	variable: "--font-inter",
});

const lora = localFont({
	src: "../../public/fonts/lora-variable-font.woff2",
	display: "swap",
	variable: "--font-lora",
});

export default function Layout({ children }) {
	return (
		<div
			className={`${inter.variable} ${lora.variable} flex min-h-screen flex-col`}
		>
			<Header />
			<main className="container mx-auto my-16 flex-grow px-4 sm:px-6 md:max-w-6xl md:px-8">
				{children}
			</main>
			<Footer />
		</div>
	);
}
