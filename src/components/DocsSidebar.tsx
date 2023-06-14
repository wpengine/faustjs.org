import React from 'react';
import { flatListToHierarchical } from '@faustwp/core';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { DocsSidebarMenuItemsFragmentFragment } from '__generated__/graphql';
import { gql } from '../__generated__';
import { Link } from './Link';

type DocsSidebarProps = {
  menuItems: DocsSidebarMenuItemsFragmentFragment[];
};

export function DocsSidebar(props: DocsSidebarProps) {
  const { menuItems } = props;

  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items: Array<{}>) {
    return items.map((item: any) => {
      const { id, path, label, children } = item;

      return (
        <>
          <Typography
            variant="body1"
            component="h3"
            sx={{ fontWeight: 'bold' }}>
            {label}
          </Typography>
          {children.length ? (
            <List>
              {children.map((child: any) => {
                return (
                  <ListItem disablePadding>
                    <Link
                      sx={{
                        '&:hover': {
                          textDecoration: 'none',
                          opacity: '1.0',
                        },
                        color: 'black',
                        opacity: '0.6',
                        borderLeft: '1px solid #ccc',
                        pl: '1rem',
                        py: '0.2rem',
                      }}
                      href={child.path ?? ''}>
                      {child.label ?? ''}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          ) : null}
        </>
      );
    });
  }

  return <>{renderMenu(hierarchicalMenuItems)}</>;
}

DocsSidebar.fragments = {
  entry: gql(`
    fragment DocsSidebarMenuItemsFragment on MenuItem {
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
  `),
};
