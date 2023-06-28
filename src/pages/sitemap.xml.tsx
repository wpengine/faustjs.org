import { getSitemapProps } from '@faustwp/core';
import { GetServerSideProps } from 'next';

export default function Sitemap() {}

export function getServerSideProps(ctx: GetServerSideProps) {
  // @ts-ignore
  return getSitemapProps(ctx, {
    frontendUrl: process.env.NEXT_PUBLIC_APP_URL,
    pages: [
      {
        path: '/blog',
      },
    ],
  });
}
