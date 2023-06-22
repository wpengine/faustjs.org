import { useQuery } from '@apollo/client';
import React from 'react';
import { Footer, Header, EntryHeader, Main } from 'components';
import { Posts } from 'components/Posts';
import { gql } from '__generated__';
import { GetPostsPage } from '__generated__/graphql';
import { getNextStaticProps } from '@faustwp/core';

export default function Page(props: any) {
  const { data, loading } = useQuery(Page.query);

  if (loading) {
    return <>Loading...</>;
  }

  const {
    generalSettings,
    primaryMenuItems,
    secondaryMenuItems,
    footer1MenuItems,
    footer2MenuItems,
    footer3MenuItems,
    footer4MenuItems,
    posts,
  } = data;
  const { title: siteTitle } = generalSettings;

  return (
    <>
      <Header
        siteTitle={siteTitle}
        primaryMenuItems={primaryMenuItems.nodes}
        secondaryMenuItems={secondaryMenuItems.nodes}
      />

      <Main>
        <EntryHeader title="Latest Posts" />
        <div className="container">
          <Posts />
        </div>
      </Main>

      <Footer
        footer1MenuItems={footer1MenuItems}
        footer2MenuItems={footer2MenuItems}
        footer3MenuItems={footer3MenuItems}
        footer4MenuItems={footer4MenuItems}
      />
    </>
  );
}

Page.variables = (seedQuery: any) => {
  return {
    uri: seedQuery.uri,
  };
};

Page.query = gql(`
  query GetPostsPage(
    $first: Int!
  ) {
    posts(first: $first) {
      edges {
        node {
          ...PostsItemFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
    generalSettings {
      title
      description
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        ...PrimaryMenuItemsFragment
      }
    }
    secondaryMenuItems: menuItems(where: { location: SECONDARY }) {
      nodes {
        ...SecondaryMenuItemsFragment
      }
    }
    footer1MenuItems: menuItems(where: {location: FOOTER_1}) {
      nodes {
        ...FooterMenuItemsFragment
      }
    }
    footer2MenuItems: menuItems(where: {location: FOOTER_2}) {
      nodes {
        ...FooterMenuItemsFragment
      }
    }
    footer3MenuItems: menuItems(where: {location: FOOTER_3}) {
      nodes {
        ...FooterMenuItemsFragment
      }
    }
    footer4MenuItems: menuItems(where: {location: FOOTER_4}) {
      nodes {
        ...FooterMenuItemsFragment
      }
    }
  }
`);

export async function getStaticProps(context: any) {
  return getNextStaticProps(context, {
    Page,
  });
}
