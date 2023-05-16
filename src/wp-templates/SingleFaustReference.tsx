import { gql } from "../__generated__";
import Head from "next/head";
import {
  Header,
  Footer,
  EntryHeader,
  Sidebar
} from "../components";
import { GetReferenceQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";
import { Container, Grid } from '@mui/material';

const Component: FaustTemplate<GetReferenceQuery> = (props) => {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { generalSettings, primaryMenuItems, reference } = props.data;
  const { title: siteTitle } = generalSettings;
  const { nodes: menuItems } = primaryMenuItems;
  const { title, content } = reference;

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        menuItems={menuItems}
      />

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row' }}>
          <Grid item xs={12} md={4} >
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={8}>
            <EntryHeader title={title} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Grid>
        </Grid>
      </Container>

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
  ${Sidebar.fragments.entry}
  query GetReference($databaseId: ID!, $asPreview: Boolean = false) {
    reference(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
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
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
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
    sidebarMenuItems: menuItems(where: { location: SIDEBAR }) {
      nodes {
        ...SidebarMenuItemFragment
      }
    }
  }
`);

export default Component;
