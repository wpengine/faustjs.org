import { gql } from "../__generated__";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";
import { GetHomePageQuery } from "../__generated__/graphql";
import { FaustTemplate } from "@faustwp/core";
import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

const Component: FaustTemplate<GetHomePageQuery> = (props) => {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          1
        </Grid>
        <Grid item xs={12}>
          2
        </Grid>
        <Grid item xs={12}>
          3
        </Grid>
        <Grid item xs={12}>
          4
        </Grid>
      </Grid>

      <Footer />
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
