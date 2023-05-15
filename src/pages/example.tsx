import React from 'react';
import { getNextStaticProps } from '@faustwp/core';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { gql } from '__generated__';
import { useQuery } from '@apollo/client';
import { Header, EntryHeader, Footer } from 'components';

/**
 * Next.js file based page example with Faust helpers.
 */
export default function Page() {
  const { data } = useQuery(Page.query);
  const { generalSettings, primaryMenuItems } = data;
  const { title: siteTitle } = generalSettings;
  const menuItems = primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header siteTitle={siteTitle} menuItems={menuItems} />

      <main className="container">
        <EntryHeader title="Next.js Page Example" />
        <p>Next.js pages are still supported!</p>
      </main>

      <Footer />
    </>
  );
}

Page.query = gql(`
  query GetExamplePage {
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

export function getStaticProps(ctx: GetStaticPropsContext) {
  return getNextStaticProps(ctx, {
    Page,
  });
}
