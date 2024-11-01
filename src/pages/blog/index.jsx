import { gql, useQuery } from "@apollo/client";
import { getNextStaticProps } from "@faustwp/core";
import Link from "next/link";
import Card from "@/components/card";
import Date from "@/components/date";

export default function BlogIndex() {
	const {
		loading,
		error,
		data: {
			posts: { nodes: posts },
		},
	} = useQuery(BlogIndex.query);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error! {error.message}</p>;

	return (
		<main className="container-main container prose prose-invert px-8 py-14 prose-h2:mt-0 prose-h2:text-lg lg:px-16 lg:py-24">
			<h1 className="bg-gradient-to-tr from-blue-200 to-teal-300 bg-clip-text text-transparent">
				Faust.js news
			</h1>
			<ul className="mt-8 grid list-none auto-rows-max grid-cols-6 gap-4 pl-0 md:grid-cols-12 md:gap-6 xl:gap-8">
				{posts.map((post) => (
					<Card
						as="li"
						className="group relative col-span-full flex flex-col rounded-2xl p-4 shadow-gray-900 transition duration-100 hover:bg-gray-900 hover:shadow-xl hover:ring-blue-600/40 md:col-span-6 md:p-6 lg:col-span-4 lg:p-8"
						key={post.databaseId}
					>
						<h2>
							<Link
								className="text-gray-300 no-underline before:absolute before:inset-0 before:block"
								href={post.uri}
							>
								{post.title}
							</Link>
						</h2>
						<Date className="text-blue-100/70" dateString={post.date} />
						<div
							className="mb-4"
							dangerouslySetInnerHTML={{ __html: post.excerpt }}
						/>
					</Card>
				))}
			</ul>
		</main>
	);
}

BlogIndex.query = gql`
	query getPosts {
		posts {
			nodes {
				title
				excerpt
				date
				databaseId
				uri
			}
		}
	}
`;

export async function getStaticProps(context) {
	return getNextStaticProps(context, {
		Page: BlogIndex,
		revalidate: 60,
	});
}
