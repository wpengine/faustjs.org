import localFont from "next/font/local";
import ChatButton from "./chat/chat-button";
import ChatDialog from "./chat/chat-dialog";
import Footer from "./footer";
import Header from "./header";
import SearchBox from "./search/search-box";

const inter = localFont({
	src: "../fonts/inter-variable-font.woff2",
	display: "swap",
	variable: "--font-inter",
});

export default function Layout({ children }) {
	return (
		<div
			className={`${inter.variable} font-inter flex min-h-screen flex-col selection:bg-purple-700`}
		>
			<a href="#main-content" className="faust-skip-link">
				Skip to main content
			</a>

			<Header />
			<ChatButton />
			{children}
			<Footer />
			<SearchBox />
			<ChatDialog />
		</div>
	);
}
