import { gql, useQuery } from "@apollo/client";
import { getNextStaticProps } from "@faustwp/core";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineArrowPath, HiOutlineChevronDown } from "react-icons/hi2";
import Card from "@/components/card";
import Date from "@/components/date";
import Seo from "@/components/seo";

const GET_POSTS = gql`
	query getPosts($first: Int!, $after: String) {
		posts(first: $first, after: $after) {
			pageInfo {
				hasNextPage
				endCursor
			}
			edges {
				node {
					id
					title
					excerpt
					date
					databaseId
					uri
				}
			}
		}
	}
`;

const BATCH_SIZE = 12;
export default function BlogIndex() {
	const {
		data,
		loading = true,
		error,
		fetchMore,
	} = useQuery(GET_POSTS, {
		// eslint-disable-next-line unicorn/no-null
		variables: { first: BATCH_SIZE, after: null },
		notifyOnNetworkStatusChange: true,
		fetchPolicy: "cache-and-network",
	});

	if (loading && !data)
		return (
			<div className="container-main flex justify-center py-20">
				Loading <HiOutlineArrowPath className="ml-2 h-5 w-5 animate-spin" />
			</div>
		);

	if (error) return <p>Error! {error.message}</p>;

	if (!data?.posts.edges.length) {
		return <p>No posts have been published</p>;
	}

	const loadMorePosts = async () => {
		await fetchMore({
			variables: {
				first: BATCH_SIZE,
				after: data.posts.pageInfo.endCursor,
			},
		});
	};

	return (
		<main
			id="main-content"
			className="container-main container-max prose prose-invert prose-h2:mt-0 prose-h2:text-lg container px-8 py-14 lg:px-16 lg:py-24"
		>
			<Seo
				title="News"
				description="Faust.js blog feed with the latest news."
				url="/blog/"
			/>
			<h1 className="bg-linear-to-tr from-blue-200 to-teal-300 bg-clip-text text-transparent">
				Faust.js news
			</h1>
			<ul className="mt-8 grid list-none auto-rows-max grid-cols-6 gap-4 pl-0 md:grid-cols-12 md:gap-6 xl:gap-8">
				{data.posts.edges.map(({ node: post }) => (
					<Card
						as="li"
						className="group relative col-span-full flex flex-col rounded-2xl p-4 shadow-gray-900 transition duration-100 hover:bg-gray-900 hover:shadow-xl hover:ring-blue-600/40 md:col-span-6 md:p-6 lg:col-span-4 lg:p-8"
						key={post.databaseId}
					>
						<h2>
							<Link
								className="text-gray-300 no-underline before:absolute before:inset-0 before:block"
								href={post.uri}
								prefetch={false}
							>
								{post.title}
							</Link>
						</h2>
						<Date className="text-blue-100/70" dateString={post.date} />
						<div
							className="mb-4"
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{ __html: post.excerpt }}
						/>
					</Card>
				))}
			</ul>
			{data.posts.pageInfo.hasNextPage && (
				<div className="mt-8 flex justify-center">
					<LoadMoreButton onClick={loadMorePosts} />
				</div>
			)}
		</main>
	);
}

const LoadMoreButton = ({ onClick }) => {
	const [loading, setLoading] = useState(false);

	const handleLoadMore = async () => {
		setLoading(true);
		await onClick();
		setLoading(false);
	};

	return (
		<button
			type="button"
			className="flex cursor-pointer items-center rounded-sm bg-purple-700 px-4 py-2 text-white transition ease-in-out hover:bg-purple-800"
			onClick={handleLoadMore}
			disabled={loading}
		>
			{loading ? (
				<>
					Loading <HiOutlineArrowPath className="ml-2 h-5 w-5 animate-spin" />
				</>
			) : (
				<>
					Load more <HiOutlineChevronDown className="ml-2 h-5 w-5" />
				</>
			)}
		</button>
	);
};

BlogIndex.query = GET_POSTS;

BlogIndex.variables = () => {
	return {
		// eslint-disable-next-line unicorn/no-null
		after: null,
		first: BATCH_SIZE,
	};
};

export async function getStaticProps(context) {
	return getNextStaticProps(context, {
		Page: BlogIndex,
		revalidate: 60,
	});
}
