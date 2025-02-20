import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import Seo from "@/components/seo";

export default function Component(props) {
	const { asPath } = useRouter();
	const { title, content } = props.data?.page ?? { title: "" };

	return (
		<div className="mx-auto w-full max-w-5xl p-6">
			<Seo title={title} url={asPath} />

			<h1 className="mb-6 text-center text-4xl font-bold">{title}</h1>
			<div
				className="prose prose-lg prose-invert mx-auto"
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
}

Component.query = gql`
	query GetPageDataByURI($uri: ID!) {
		page(id: $uri, idType: URI) {
			title
			content
			slug
		}
	}
`;

Component.variables = (seedQuery) => ({
	uri: seedQuery?.uri,
});
