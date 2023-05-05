import React from "react";
import { FaustTemplate } from "@faustwp/core";
import Head from "next/head";
import { Container } from "@mui/material";
import { gql } from "__generated__";
import { GetHomePageQuery } from "__generated__/graphql";
import { Header, Content, Footer } from "components";

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const { data } = props;
  const { generalSettings, primaryMenuItems } = data;
  const { title: siteTitle, description: siteDescription } = generalSettings;
  const menuItems = primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Container maxWidth={false} sx={{ backgroundColor: "#002838" }}>
        <Header
          siteTitle={siteTitle}
          siteDescription={siteDescription}
          menuItems={menuItems}
        />
      </Container>

      <Container sx={{ mt: 4 }}>
        <Content />
      </Container>

      <Container maxWidth={false} sx={{ backgroundColor: "#002838", mt: 4 }}>
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
  }
`);

export default Component;
