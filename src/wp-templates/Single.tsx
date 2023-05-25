import React from 'react';
import { FaustTemplate } from '@faustwp/core';
import Head from 'next/head';
import { gql } from '__generated__';
import { GetPostQuery } from '__generated__/graphql';
import { Header, EntryHeader, Footer } from 'components';

const Component: FaustTemplate<GetPostQuery> = (props) => {
  const { data, loading } = props;

  // Loading state for previews
  if (loading) {
    return <>Loading...</>;
  }

  const { post, generalSettings, primaryMenuItems, secondaryMenuItems } = data;
  const { title: siteTitle } = generalSettings;
  const { title, content, date, author } = post;

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        primaryMenuItems={primaryMenuItems.nodes}
        secondaryMenuItems={secondaryMenuItems.nodes}
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
    primaryMenuItems: menuItems(where: {location: PRIMARY}) {
      nodes {
        ...PrimaryMenuItemsFragment
      }
    }
    secondaryMenuItems: menuItems(where: {location: SECONDARY}) {
      nodes {
        ...SecondaryMenuItemsFragment
      }
    }
  }
`);

export default Component;
