import React from 'react';
import { FaustTemplate } from '@faustwp/core';
import { Container, Grid } from '@mui/material';
import { gql } from '__generated__';
import {
  DocsSidebarMenuItemsFragmentFragment,
  GetReferenceQuery,
} from '__generated__/graphql';
import {
  Head,
  Header,
  Footer,
  EntryHeader,
  SidebarLayout,
  Main,
} from 'components';
import { buildTableOfContents } from '../utility/buildTableOfContents';

const Component: FaustTemplate<GetReferenceQuery> = (props) => {
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
    reference,
  } = data;
  const { title: siteTitle, description: siteDescription } = generalSettings;
  const { title, content, seo } = reference;

  return (
    <>
      <Head
        title={`${title} - ${siteTitle}`}
        description={seo?.metaDesc || ''}
        imageUrl={seo?.opengraphImage?.sourceUrl || ''}
      />

      <Header
        siteTitle={siteTitle}
        primaryMenuItems={primaryMenuItems.nodes}
        secondaryMenuItems={secondaryMenuItems.nodes}
      />

      <Main>
        <Container
          sx={{
            py: 4,
          }}
          maxWidth="xl">
          <SidebarLayout
            menuItems={
              docsSidebarMenuItems.nodes as DocsSidebarMenuItemsFragmentFragment[]
            }
            tableOfContents={buildTableOfContents(content)}>
            <EntryHeader title={title} />
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </SidebarLayout>
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
  query GetReference($databaseId: ID!, $asPreview: Boolean = false) {
    reference(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      seo {
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
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
