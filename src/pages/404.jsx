import CustomLink from "@/components/link";
import Seo from "@/components/seo";

export default function Custom404() {
	const suggestions = [
		{ title: "Documentation", href: "/docs" },
		{ title: "Home Page", href: "/" },
		{ title: "Blog", href: "/blog" },
	];

	return (
		<main
			className="p-16 text-center font-sans"
			role="main"
			aria-labelledby="page-title"
			id="main-content"
		>
			<Seo title="Page not found" />

			<h1 id="page-title" className="text-5xl text-white">
				Oops! Lost in the Web...
			</h1>
			<p className="mt-4 text-xl text-white">
				It seems like you've hit a page that doesn’t exist.
			</p>
			<div className="mt-8 text-6xl" aria-hidden="true">
				🧭
			</div>
			<p className="mt-4 text-lg text-white">
				You seem to have reached a non-existent page. Please try search or one
				of the links below.
			</p>
			<section aria-labelledby="suggestions-title" className="mt-6">
				<h2 id="suggestions-title" className="text-lg text-white">
					Here are some pages that might be what you’re looking for:
				</h2>
				<ul className="mt-4 space-y-2">
					{suggestions.map((suggestion, index) => (
						<li key={index} className="text-lg">
							<CustomLink
								href={suggestion.href}
								className="text-blue-400 hover:underline"
							>
								{suggestion.title}
							</CustomLink>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
