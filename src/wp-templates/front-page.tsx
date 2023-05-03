import { gql } from "../__generated__";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";
import { GetHomePageQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";
import { Button, Container, Grid } from "@mui/material";
import styled from "@emotion/styled";
import Content from "../components/content";

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

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
