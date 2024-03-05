import React from 'react';
import { gql } from '__generated__';
import { FaustPage, getNextStaticProps } from '@faustwp/core';
import { GetShowcasesPageQuery } from '__generated__/graphql';
import { Grid, Typography, Container, Box, Card } from '@mui/material';
import { Head, Header, Footer, Main } from 'components';
import { GetStaticPropsContext } from 'next';
import { ShowcaseCard } from 'components/ShowcaseCard';

const Page: FaustPage<GetShowcasesPageQuery> = (props) => {
  const { data } = props;

  const {
    generalSettings,
    primaryMenuItems,
    secondaryMenuItems,
    footer1MenuItems,
    footer2MenuItems,
    footer3MenuItems,
    footer4MenuItems,
    showcases,
  } = data ?? {};
  const { title: siteTitle, description: siteDescription } = generalSettings;
  const showcaseSeo = showcases.edges[0].node.seo;

  return (
    <>
      <Head
        title={siteTitle}
        description={showcaseSeo?.metaDesc || ''}
        imageUrl={showcaseSeo?.opengraphImage?.sourceUrl || ''}
      />
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
            <Typography
              variant="h3"
              component="h2"
              color="#7E5CEF"
              sx={{ textAlign: 'center' }}>
              Faust.js &trade;
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ mt: 1, mb: 4, textAlign: 'center' }}>
              New to Faust? Check out these Faust-powered sites for inspiration.
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ display: 'flex', flexDirection: 'row' }}>
              {showcases?.nodes?.map((item) => (
                <Grid item sx={{ marginBottom: '25px' }} xs={12} md={4} sm={6}>
                  <ShowcaseCard
                    imageSrc={item.featuredImage.node.sourceUrl}
                    title={item.showcaseFields.externalUrlTitle}
                    url={item.showcaseFields.externalUrl}
                    alt={`${item.showcaseFields.externalUrlTitle} external website`}
                  />
                </Grid>
              ))}
              {showcases?.nodes?.length < 1 && <p>No showcases found.</p>}
            </Grid>
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
  query GetShowcasesPage {
    showcases(first: 100) {
      edges {
        node {
          seo {
            metaDesc
            opengraphImage {
              sourceUrl
            }
          }
        }
      }
      nodes {
        id
        title
        showcaseFields {
          externalUrlTitle
          externalUrl
        }
        featuredImage {
          node {
            sourceUrl
          }
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

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
  });
}

export default Page;
