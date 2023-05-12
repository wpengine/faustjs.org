import { gql } from "../__generated__";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";
import { GetReferenceQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";

const Component: FaustTemplate<GetReferenceQuery> = (props) => {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { generalSettings, primaryMenuItems } = props.data;
  const { title: siteTitle, description: siteDescription } = generalSettings;
  const { nodes: menuItems } = primaryMenuItems;
  // const { title, content } = reference;

  // DEBUGGING CODE - REMOVE
  const title = 'test';
  const content = 'content';
  const date = 'Wednesday';
  const author = {
    node: {
      name: 'meow'
    }
  }

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title={title} date={date} author={author.node.name} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>

      <Footer />
    </>
  );
};

Component.variables = (seedQuery, ctx) => {
  return {
    uri: seedQuery.uri,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql(`
  query GetReference($databaseId: ID!, $asPreview: Boolean = false) {
    reference(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      ... on NodeWithEditorBlocks {
        editorBlocks {
          renderedHtml
          ... on CoreCode {
            name
            attributes {
              borderColor
              backgroundColor
              content
              style
              textColor
              fontSize
            }
          }
        }
      }
    }
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: {location: PRIMARY}) {
      nodes {
        id
        uri
        path
        label
        parentId
        cssClasses
        menu {
          node {
            name
          }
        }
      }
    }
  }
`);

export default Component;
