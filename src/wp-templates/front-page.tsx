import React from "react";
import Head from "next/head";
import { FaustTemplate } from "@faustwp/core";
import { Container } from "@mui/material";
import Content from "../components/content";
import { GetHomePageQuery } from "../__generated__/graphql";
import { Header, Footer } from "../components";
import { gql } from "../__generated__";

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const { data } = props;
  const { title: siteTitle, description: siteDescription } =
    data.generalSettings;
  const menuItems = data.primaryMenuItems.nodes;

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
