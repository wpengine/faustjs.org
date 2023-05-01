import React from "react";
import Link from "next/link";
import Head from "next/head";
import { FaustTemplate } from "@faustwp/core";
import { gql } from "../__generated__/index.js";
import { GetArchiveQuery } from "../__generated__/graphql.js";
import { Header, Footer, EntryHeader } from "../components/index.js";

const Component: FaustTemplate<GetArchiveQuery> = (props) => {
  const { data } = props;
  const { title: siteTitle, description: siteDescription } =
    data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;
  const { archiveType } = data.nodeByUri;

  if (archiveType !== "Category" && archiveType !== "Tag") {
    return <>Archive not found</>;
  }

  const { name, posts } = data.nodeByUri;

  return (
    <>
      <Head>
        <title>{`${archiveType}: ${name} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className="container">
        <EntryHeader title={`Archive for ${archiveType}: ${name}`} />

        <h3>Recent Posts</h3>
        <ul>
          {posts.nodes.map((post) => (
            <Link key={post.id} href={post.uri}>
              <li>{post.title}</li>
            </Link>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
};

Component.variables = (seedQuery) => {
  return {
    uri: seedQuery.uri,
  };
};

Component.query = gql(`
  query GetArchive($uri: String!) {
    nodeByUri(uri: $uri) {
      archiveType: __typename
      ... on Category {
        name
        posts {
          nodes {
            id
            title
            uri
          }
        }
      }
      ... on Tag {
        name
        posts {
          nodes {
            id
            title
            uri
          }
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
