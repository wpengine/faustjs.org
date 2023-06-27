import React from 'react';
import { useRouter } from 'next/router';
import { flatListToHierarchical } from '@faustwp/core';
import { Typography, ListItem, List } from '@mui/material';
import { DocsSidebarMenuItemsFragmentFragment } from '__generated__/graphql';
import { gql } from '../__generated__';
import { Link } from './Link';

type DocsSidebarProps = {
  menuItems: DocsSidebarMenuItemsFragmentFragment[];
};

export function DocsSidebar(props: DocsSidebarProps) {
  const router = useRouter();
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
                const active = router.asPath === child.path.replace(/\/$/, '');

                return (
                  <ListItem key={child.id} disablePadding>
                    <Link
                      sx={{
                        '&:hover': {
                          color: 'rgba(0, 0, 0, 1.0)',
                        },
                        textDecoration: 'none',
                        color: active
                          ? 'var(--wp--preset--color--primary)'
                          : 'rgba(0, 0, 0, 0.6)',
                        borderLeft: active
                          ? '1px solid var(--wp--preset--color--primary)'
                          : '1px solid rgba(0, 0, 0, 0.2)',
                        px: '1rem',
                        py: '0.2rem',
                        display: 'flex',
                        flex: '1',
                        fontSize: '1rem',
                        transition: '0.2s ease',
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

  return <aside>{renderMenu(hierarchicalMenuItems)}</aside>;
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
