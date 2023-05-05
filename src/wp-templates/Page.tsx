import React from 'react';
import { FaustTemplate } from '@faustwp/core';
import Head from 'next/head';
import { gql } from '__generated__';
import { GetPageQuery } from '__generated__/graphql';
import { Header, EntryHeader, Footer } from 'components';

const Component: FaustTemplate<GetPageQuery> = (props) => {
  const { data, loading } = props;

  // Loading state for previews
  if (loading) {
    return <>Loading...</>;
  }

  const { page, generalSettings, primaryMenuItems } = data;
  const { title: siteTitle, description: siteDescription } = generalSettings;
  const menuItems = primaryMenuItems.nodes;
  const { title, content } = page;

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
        <EntryHeader title={title} />
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
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
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
