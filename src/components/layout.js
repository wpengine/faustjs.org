import Header from "./header";
import Footer from "./footer";

import localFont from "next/font/local";

const inter = localFont({
	src: "../fonts/inter-variable-font.woff2",
	display: "swap",
	variable: "--font-inter",
});

export default function Layout({ children }) {
	return (
		<div className={`${inter.variable} flex min-h-screen flex-col font-inter`}>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
