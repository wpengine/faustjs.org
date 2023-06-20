import React from 'react';
import { FaustTemplate, getNextStaticProps } from '@faustwp/core';
import Head from 'next/head';
import { gql } from '__generated__';
import { Get404PageQuery } from '__generated__/graphql';
import { Header, EntryHeader, Footer, Link, Container } from 'components';
import { GetStaticPropsContext } from 'next';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  Container as MUIContainer,
  Box,
  CircularProgress,
} from '@mui/material';

const SEARCH_RESULTS_QUERY = gql(`
  query SEARCH_RESULTS($searchTerm: String!) {
    contentNodes(where: {search: $searchTerm}) {
      edges {
        node {
          id
          ... on NodeWithTitle {
            title
          }
          uri
        }
      }
    }
  }
`);

export const Page: FaustTemplate<Get404PageQuery> = ({ data }) => {
  const { generalSettings, primaryMenuItems, secondaryMenuItems } = data;
  const { title: siteTitle } = generalSettings;
  const router = useRouter();
  const { data: searchResultsData, loading } = useQuery(SEARCH_RESULTS_QUERY, {
    variables: {
      searchTerm: router.asPath,
    },
    skip: !router.isReady,
  });
  const hasSearchResults = searchResultsData?.contentNodes?.edges;

  return (
    <>
      <Head>
        <title>{`404 Not Found - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        primaryMenuItems={primaryMenuItems.nodes}
        secondaryMenuItems={secondaryMenuItems.nodes}
      />

      <main className="container">
        <Container>
          <MUIContainer maxWidth="md" sx={{ marginBottom: '4rem' }}>
            <EntryHeader title="404 Not Found" />

            <p>
              We couldn&apos;t find what you were looking for. However, these
              posts may be related:
            </p>

            {!hasSearchResults && (
              <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress size="3em" color="info" />
              </Box>
            )}
            {hasSearchResults && (
              <ul>
                {searchResultsData?.contentNodes?.edges?.map((edge) => (
                  <Link sx={{ color: '#000' }} href={edge.node.uri}>
                    <li>{edge.node.title}</li>
                  </Link>
                ))}
              </ul>
            )}

            {hasSearchResults && !hasSearchResults.length && !loading && (
              <>No related results found.</>
            )}
          </MUIContainer>
        </Container>
      </main>

      <Footer />
    </>
  );
};

Page.query = gql(`
query Get404Page {
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

export function getStaticProps(ctx: GetStaticPropsContext) {
  // @ts-ignore
  return getNextStaticProps(ctx, { Page });
}

export default Page;
