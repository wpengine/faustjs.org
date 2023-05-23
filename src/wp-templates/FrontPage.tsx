import React from 'react';
import { FaustTemplate } from '@faustwp/core';
import Head from 'next/head';
import { Container } from '@mui/material';
import { gql } from '__generated__';
import { GetHomePageQuery } from '__generated__/graphql';
import { Header, Content, Footer } from 'components';

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const { data } = props;
  const { generalSettings, primaryMenuItems, secondaryMenuItems } = data;
  const { title: siteTitle } = generalSettings;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Container
        maxWidth={false}
        sx={{ backgroundColor: 'var(--color--dark-blue)' }}>
        <Header
          siteTitle={siteTitle}
          primaryMenuItems={primaryMenuItems.nodes}
          secondaryMenuItems={secondaryMenuItems.nodes}
        />
      </Container>

      <Container sx={{ mt: 4 }}>
        <Content />
      </Container>

      <Container
        maxWidth={false}
        sx={{ backgroundColor: 'var(--color--dark-blue)', mt: 4 }}>
        <Footer />
      </Container>
    </>
  );
};

Component.query = gql(`
  query GetHomePage {
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
