import { gql } from "@apollo/client";

export default function Component(props) {
	return (
		<div className="mx-auto w-full max-w-5xl p-6">
			<h1 className="mb-6 text-center text-4xl font-bold">
				{props.data.page.title}
			</h1>
			<div
				className="prose prose-lg prose-invert mx-auto"
				dangerouslySetInnerHTML={{ __html: props.data.page.content }}
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
