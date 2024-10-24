import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="container mx-auto my-16 flex-grow px-4 sm:px-6 md:max-w-6xl md:px-8">
				{children}
			</main>
			<Footer />
		</div>
	);
}
