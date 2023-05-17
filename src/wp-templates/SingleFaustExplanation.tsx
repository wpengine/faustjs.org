import React from 'react';
import Head from 'next/head';
import { FaustTemplate } from '@faustwp/core';
import { Container, Grid } from '@mui/material';
import { gql } from '__generated__';
import {
  DocsSidebarMenuItemFragmentFragment,
  GetExplanationsQuery,
} from '__generated__/graphql';
import { Header, Footer, EntryHeader, DocsSidebar, Main } from 'components';

const Component: FaustTemplate<GetExplanationsQuery> = (props) => {
  const { loading, data } = props;

  // Loading state for previews
  if (loading) {
    return <>Loading...</>;
  }

  const {
    generalSettings,
    primaryMenuItems,
    docsSidebarMenuItems,
    explanations,
  } = data;
  const { title: siteTitle } = generalSettings;
  const { nodes: menuItems } = primaryMenuItems;
  const { title, content } = explanations;

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      <Header siteTitle={siteTitle} menuItems={menuItems} />

      <Main>
        <Container sx={{ mt: 4 }}>
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid item xs={12} md={4}>
              <DocsSidebar
                menuItems={
                  docsSidebarMenuItems.nodes as DocsSidebarMenuItemFragmentFragment[]
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

      <Footer />
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
  query GetExplanations($databaseId: ID!, $asPreview: Boolean = false) {
    explanations(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
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
    docsSidebarMenuItems: menuItems(where: {location: DOCS_SIDEBAR}) {
      nodes {
        ...DocsSidebarMenuItemFragment
      }
    }
  }
`);

export default Component;
