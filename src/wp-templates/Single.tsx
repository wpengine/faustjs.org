import React from 'react';
import { FaustTemplate } from '@faustwp/core';
import { Container, Grid } from '@mui/material';
import { gql } from '__generated__';
import { GetPostQuery } from '__generated__/graphql';
import {
  Head,
  Header,
  Footer,
  EntryHeader,
  Main,
  PostCategoryList,
  PostTagList,
} from 'components';

const Component: FaustTemplate<GetPostQuery> = (props) => {
  const { data, loading } = props;

  // Loading state for previews
  if (loading) {
    return <>Loading...</>;
  }

  const {
    post,
    generalSettings,
    primaryMenuItems,
    secondaryMenuItems,
    footer1MenuItems,
    footer2MenuItems,
    footer3MenuItems,
    footer4MenuItems,
  } = data;
  const { title: siteTitle, description: siteDescription } = generalSettings;
  const { title, content, date, author, tags, categories } = post;

  return (
    <>
      <Head title={`${title} - ${siteTitle}`} description={siteDescription} />

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
            <Grid item xs={12}>
              <EntryHeader
                title={title}
                date={date}
                author={author.node.name}
              />
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <PostCategoryList categories={categories.edges} />
              <PostTagList tags={tags.edges} />
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

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql(`
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
      tags {
        edges {
          node {
            name
            uri
          }
        }
      }
      categories {
        edges {
          node {
            name
            uri
          }
        }
      }
      ...FeaturedImageFragment
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
