import React from 'react';
import { FaustTemplate } from '@faustwp/core';
import { Container } from '@mui/material';
import { gql } from '__generated__';
import { GetHomePageQuery } from '__generated__/graphql';
import { Head, Header, Content, Main, Footer } from 'components';

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const { data } = props;
  const {
    pages,
    generalSettings,
    primaryMenuItems,
    secondaryMenuItems,
    footer1MenuItems,
    footer2MenuItems,
    footer3MenuItems,
    footer4MenuItems,
  } = data;
  const { title: siteTitle, description: siteDescription } = generalSettings;
  const seoPages = pages.edges[0].node.seo;

  return (
    <>
      <Head
        title={siteTitle}
        description={seoPages.metaDesc}
        imageUrl={seoPages.opengraphImage.sourceUrl}
      />

      <Container maxWidth={false}>
        <Header
          siteTitle={siteTitle}
          primaryMenuItems={primaryMenuItems.nodes}
          secondaryMenuItems={secondaryMenuItems.nodes}
        />
      </Container>

      <Main>
        <Container sx={{ mt: 4 }}>
          <Content />
        </Container>
      </Main>

      <Container
        maxWidth={false}
        sx={{ backgroundColor: 'var(--wp--preset--color--contrast)', mt: 4 }}>
        <Footer
          footer1MenuItems={footer1MenuItems}
          footer2MenuItems={footer2MenuItems}
          footer3MenuItems={footer3MenuItems}
          footer4MenuItems={footer4MenuItems}
        />
      </Container>
    </>
  );
};

Component.query = gql(`
  query GetHomePage {
    pages {
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

export default Component;
