import React from "react";
import Head from "next/head";
import { FaustTemplate } from "@faustwp/core";
import { gql } from "../__generated__/index.js";
import { GetPostQuery } from "../__generated__/graphql.js";
import { Header, Footer, EntryHeader } from "../components/index.js";

const Component: FaustTemplate<GetPostQuery> = (props) => {
  const { data, loading } = props;

  // Loading state for previews
  if (loading) {
    return <>Loading...</>;
  }

  const { post, generalSettings, primaryMenuItems } = data;
  const { title: siteTitle, description: siteDescription } = generalSettings;
  const { nodes: menuItems } = primaryMenuItems;
  const { title, content, date, author } = post;

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
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>

      <Footer />
    </>
  );
};

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql(`
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
    }
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
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
