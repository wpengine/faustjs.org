import React from 'react';
import {
  Box,
  Grid,
  List,
  Container,
  Typography,
  ListItem,
} from '@mui/material';
import { FooterMenuItemsFragmentFragment } from '__generated__/graphql';
import { gql } from '__generated__';
import { Link } from './Link';

type FooterProps = {
  footer1MenuItems: FooterMenuItemsFragmentFragment[] | any;
  footer2MenuItems: FooterMenuItemsFragmentFragment[] | any;
  footer3MenuItems: FooterMenuItemsFragmentFragment[] | any;
  footer4MenuItems: FooterMenuItemsFragmentFragment[] | any;
};
export function Footer({
  footer1MenuItems,
  footer2MenuItems,
  footer3MenuItems,
  footer4MenuItems,
}: FooterProps) {
  const renderFooterColumns = () => {
    const columns = [
      footer1MenuItems,
      footer2MenuItems,
      footer3MenuItems,
      footer4MenuItems,
    ];

    return columns.map((column) => {
      const columnTitle = column?.nodes[0].menu.node.name;

      return (
        <Grid item xs={12} md={6} lg={3} key={columnTitle}>
          <Typography variant="h6">{columnTitle}</Typography>
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {column?.nodes.map((item: any) => (
              <ListItem key={item.id} disableGutters dense>
                <Link key={item.id} href={item.uri} target={item.target}>
                  {item.label}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
      );
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        backgroundColor: 'var(--faust--footer-background-color)',
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
            {renderFooterColumns()}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            mt: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typography color="white" variant="subtitle1">
            &copy; 2013-{new Date().getFullYear()} WPEngine, Inc. All rights
            reserved. Powered by Faust.js™.
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}

Footer.fragments = {
  footerMenuItemsFragment: gql(`
     fragment FooterMenuItemsFragment on MenuItem {
       id
       uri
       path
       label
       parentId
       cssClasses
       target
       menu {
         node {
           name
         }
       }
     }
  `),
};
