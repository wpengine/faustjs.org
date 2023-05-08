import React from 'react';
import { Box, Grid, List, Link, Container, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

type LinkList = {
  title: string;
  links: LinkListItem[];
};

type LinkListItem = {
  text: string;
  url: string;
  ariaLabel?: string;
  title?: string;
  isExternalLink?: boolean;
};

export function Footer() {
  const linkListGroup: LinkList[] = [
    {
      title: 'Changelogs',
      links: [
        {
          text: '@faustwp/core',
          url: 'https://faustjs.org/docs/changelog/faustwp-core',
          title: 'Faust WP Core Changelog',
          ariaLabel: 'Click to go to the Faust WP Core Changelog',
          isExternalLink: false,
        },
        {
          text: '@faustwp/cli',
          url: 'https://faustjs.org/docs/changelog/faustwp-cli',
          title: 'Faust WP CLI Changelog',
          ariaLabel: 'Click to go to the Faust WP CLI Changelog',
          isExternalLink: false,
        },
        {
          text: 'Faust.js™ WordPress Plugin',
          url: 'https://faustjs.org/docs/changelog/faustwp',
          title: 'Faustjs Wordpress Plugin',
          ariaLabel: 'Click to go to the Faustjs Wordpress Plugin',
          isExternalLink: false,
        },
      ],
    },
    {
      title: 'Docs',
      links: [
        {
          text: 'Getting Started',
          url: 'https://faustjs.org/docs/getting-started',
          title: 'Getting Started Documentation',
          ariaLabel: 'Click to go to the Getting Started documentation',
          isExternalLink: false,
        },
        {
          text: 'Example Project',
          url: 'https://faustjs.org/docs/next/guides/project-walkthrough',
          title: 'Example Project Documentation',
          ariaLabel: 'Click to go to the Example Project documentation',
          isExternalLink: false,
        },
        {
          text: 'Privacy Policy',
          url: 'https://faustjs.org/docs/privacy-policy',
          title: 'Privacy Policy',
          ariaLabel: 'Click to go to the Privacy Policy documentation',
          isExternalLink: false,
        },
      ],
    },
    {
      title: 'Community',
      links: [
        {
          text: 'GitHub',
          url: 'https://github.com/wpengine/faustjs?ref=faustjs',
          title: 'Faustjs Github',
          ariaLabel: 'Click to go to the Faustjs Github',
          isExternalLink: true,
        },
        {
          text: 'Twitter',
          url: 'https://twitter.com/wpengine',
          title: 'WP Engine Twitter',
          ariaLabel: 'Click to go to the WP Engine Twitter',
          isExternalLink: true,
        },
        {
          text: 'YouTube',
          url: 'https://www.youtube.com/channel/UCh1WuL54XFb9ZI6m6goFv1g?ref=faustjs',
          title: 'WP Engine YouTube',
          ariaLabel: 'Click to go to the WP Engine YouTube',
          isExternalLink: true,
        },
        {
          text: 'Headless WordPress Discord',
          url: 'https://discord.gg/J2khkF9XYK',
          title: 'Headless WordPress Discord',
          ariaLabel: 'Click to go to the Headless WordPress Discord',
          isExternalLink: true,
        },
      ],
    },
    {
      title: 'WP Engine',
      links: [
        {
          text: 'Developers',
          url: 'https://developers.wpengine.com/?ref=faustjs',
          title: 'WP Engine Faustjs Developers',
          ariaLabel: 'Click to go to the WP Engine Faustjs Developers',
          isExternalLink: false,
        },
        {
          text: "We're Hiring!",
          url: 'https://wpengine.careers/?ref=faustjs',
          title: 'WP Engine is Hiring',
          ariaLabel: 'Click to go to WP Engine Careers',
          isExternalLink: false,
        },
        {
          text: 'Headless WordPress Hosting',
          url: 'https://wpengine.com/atlas?ref=faustjs',
          title: 'Headless WordPress Hosting',
          ariaLabel: 'Click to go to the WP Engine Headless WordPress Hosting',
          isExternalLink: true,
        },
      ],
    },
  ];

  const generateLinkGroups = () => {
    return linkListGroup.map((group: LinkList) => (
      <Grid item xs={12} md={6} lg={3} key={group.title}>
        <Typography variant="h6">{group.title}</Typography>
        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          {group.links.map((item: LinkListItem) => {
            const linkAttrs = {
              key: item.text,
              href: item.url,
              title: item.title,
              'aria-label': item.ariaLabel,
            };

            const externalLinkAttrs = {
              target: '_blank',
              rel: 'noreferrer',
              ...linkAttrs,
            };

            return item.isExternalLink ? (
              <Link {...externalLinkAttrs}>
                {item.text}
                <LaunchIcon sx={{ ml: 1 }} fontSize="small" />
              </Link>
            ) : (
              <Link {...linkAttrs}>{item.text}</Link>
            );
          })}
        </List>
      </Grid>
    ));
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        backgroundColor: 'inherit',
      }}>
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          backgroundColor: 'inherit',
          color: 'white',
          py: 2,
          px: 2,
        }}>
        <Grid container direction="column" alignItems="center">
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {generateLinkGroups()}
          </Grid>

          <Grid item xs={12} sx={{ mt: 4 }}>
            <Typography color="white" variant="subtitle1">
              &copy; 2013-{new Date().getFullYear()} WPEngine, Inc. All rights
              reserved. Powered by Faust.js™.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
