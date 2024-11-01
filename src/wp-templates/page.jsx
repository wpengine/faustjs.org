import { gql } from "@apollo/client";

// The Component is required
export default function Component(props) {
	return (
		<>
			<h1>{props.data.page.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: props.data.page.content }} />
		</>
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
