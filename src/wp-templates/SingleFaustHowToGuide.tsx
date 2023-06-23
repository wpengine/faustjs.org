import React from 'react';
import Head from 'next/head';
import { FaustTemplate } from '@faustwp/core';
import { Container, Grid } from '@mui/material';
import { gql } from '__generated__';
import {
  DocsSidebarMenuItemsFragmentFragment,
  GetHowToGuideQuery,
} from '__generated__/graphql';
import { Header, Footer, EntryHeader, DocsSidebar, Main } from 'components';

const Component: FaustTemplate<GetHowToGuideQuery> = (props) => {
  const { loading, data } = props;

  // Loading state for previews
  if (loading) {
    return <>Loading...</>;
  }

  const {
    generalSettings,
    primaryMenuItems,
    secondaryMenuItems,
    docsSidebarMenuItems,
    footer1MenuItems,
    footer2MenuItems,
    footer3MenuItems,
    footer4MenuItems,
    howToGuide,
  } = data;
  const { title: siteTitle } = generalSettings;
  const { title, content } = howToGuide;

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

      <Main>
        <Container sx={{ mt: 4 }}>
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid item xs={12} md={4}>
              <DocsSidebar
                menuItems={
                  docsSidebarMenuItems.nodes as DocsSidebarMenuItemsFragmentFragment[]
                }
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <EntryHeader title={title} />
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: content }}
              />
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

Component.variables = (seedQuery, ctx) => {
  return {
    databaseId: seedQuery.databaseId,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql(`
  query GetHowToGuide($databaseId: ID!, $asPreview: Boolean = false) {
    howToGuide(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      ... on NodeWithEditorBlocks {
        editorBlocks {
          renderedHtml
          ... on CoreCode {
            name
            attributes {
              borderColor
              backgroundColor
              content
              style
              textColor
              fontSize
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
    docsSidebarMenuItems: menuItems(first: 100, where: {location: DOCS_SIDEBAR}) {
      nodes {
        ...DocsSidebarMenuItemsFragment
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
