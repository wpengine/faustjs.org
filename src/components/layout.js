import localFont from "next/font/local";
import Footer from "./footer";
import Header from "./header";


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
