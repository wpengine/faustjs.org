import React from 'react';
import { flatListToHierarchical } from '@faustwp/core';
import { Typography, ListItem, List } from '@mui/material';
import { DocsSidebarMenuItemsFragmentFragment } from '__generated__/graphql';
import { gql } from '../__generated__';
import { Link } from './Link';

type DocsSidebarProps = {
  menuItems: DocsSidebarMenuItemsFragmentFragment[];
};

export function DocsSidebar(props: DocsSidebarProps) {
  const { menuItems } = props;
  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items: any) {
    return items.map((item: any) => {
      const { label, children } = item;

      return (
        <div key={item.id}>
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
                  <ListItem key={child.id} disablePadding>
                    <Link
                      sx={{
                        '&:hover': {
                          textDecoration: 'none',
                          opacity: '1.0',
                        },
                        color: 'black',
                        opacity: '0.5',
                        borderLeft: '1px solid #000',
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
        </div>
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
