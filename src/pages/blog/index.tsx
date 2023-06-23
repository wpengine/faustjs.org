import { useQuery } from '@apollo/client';
import React from 'react';
import { Footer, Header, Main } from 'components';
import { Posts } from 'components/Posts';
import { gql } from '__generated__';
import { FaustPage, getNextStaticProps } from '@faustwp/core';
import { GetPostsPageQuery } from '__generated__/graphql';
import { Grid, Typography, Container } from '@mui/material';

const Page: FaustPage<GetPostsPageQuery> = (props) => {
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
        <Container sx={{ mt: 4 }}>
          <Grid
            container
            sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h3" component="h2">
              Blog
            </Typography>
            <Typography variant="body1" component="p" sx={{ mt: 1, mb: 4 }}>
              Read the latest posts from the Faust Team
            </Typography>
            <Posts posts={posts.nodes} />
          </Grid>
        </Container>
      </Main>

      <Footer
        footer1MenuItems={footer1MenuItems}
        footer2MenuItems={footer2MenuItems}
        footer3MenuItems={footer3MenuItems}
        footer4MenuItems={footer4MenuItems}
      />
    </>
  );
};

Page.query = gql(`
  query GetPostsPage {
    posts(first: 100) {
      nodes {        
        ...PostsItemFragment
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

export default Page;
