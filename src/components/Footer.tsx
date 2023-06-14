import React from 'react';
import {
  Box,
  Grid,
  List,
  Container,
  Typography,
  ListItem,
} from '@mui/material';
import {
  Footer1MenuItemsFragmentFragment,
  Footer2MenuItemsFragmentFragment,
  Footer3MenuItemsFragmentFragment,
  Footer4MenuItemsFragmentFragment,
} from '__generated__/graphql';
import { gql } from '__generated__';
import { Link } from './Link';

type FooterProps = {
  footer1MenuItems: Footer1MenuItemsFragmentFragment[] | any;
  footer2MenuItems: Footer2MenuItemsFragmentFragment[] | any;
  footer3MenuItems: Footer3MenuItemsFragmentFragment[] | any;
  footer4MenuItems: Footer4MenuItemsFragmentFragment[] | any;
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
    console.log({ columns });

    return columns.map((column, i) => {
      return (
        <Grid item xs={12} md={6} lg={3} key={`footer${i}`}>
          <Typography variant="h6" sx={{ fontWeight: '600' }}>
            {column?.nodes[0].menu.node.name}
          </Typography>
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {column?.nodes.map((menuItem: any) => (
              <ListItem disableGutters dense>
                <Link href={menuItem.uri}>{menuItem.label}</Link>
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

        <Grid item xs={12} sx={{ mt: 4 }}>
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
  footer1MenuItemsFragment: gql(`
    fragment Footer1MenuItemsFragment on MenuItem {
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
  footer2MenuItemsFragment: gql(`
    fragment Footer2MenuItemsFragment on MenuItem {
      id
      uri
      label
      target
      menu {
        node {
          name
        }
      }
    }
  `),
  footer3MenuItemsFragment: gql(`
    fragment Footer3MenuItemsFragment on MenuItem {
      id
      uri
      label
      target
      menu {
        node {
          name
        }
      }
    }
  `),
  footer4MenuItemsFragment: gql(`
    fragment Footer4MenuItemsFragment on MenuItem {
      id
      uri
      label
      target
      menu {
        node {
          name
        }
      }
    }
  `),
};
