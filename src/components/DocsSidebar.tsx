import React from 'react';
import { useRouter } from 'next/router';
import { flatListToHierarchical } from '@faustwp/core';
import { Typography, ListItem, List, Box } from '@mui/material';
import { DocsSidebarMenuItemsFragmentFragment } from '__generated__/graphql';
import { gql } from '../__generated__';
import { Link } from './Link';

type SidebarMenuItem = DocsSidebarMenuItemsFragmentFragment & {
  children: SidebarMenuItem[];
};

type MenuProps = {
  items: SidebarMenuItem[];
};

function Menu(props: MenuProps) {
  const { items } = props;
  const router = useRouter();

  return (
    <List>
      {items.map((item) => {
        const active = router.asPath === item.path.replace(/\/$/, '');
        return (
          <>
            <ListItem key={item.id} disablePadding>
              {item.children.length === 0 && (
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
                  href={item.path ?? ''}>
                  {item.label ?? ''}
                </Link>
              )}
            </ListItem>
            {item.children && (
              <div style={{ paddingLeft: '1.5rem' }}>
                {!!item.children.length && (
                  <Typography
                    variant="body1"
                    component="h3"
                    sx={{ fontWeight: 'bold' }}>
                    {item.label}
                  </Typography>
                )}
                <Menu items={item.children} />
              </div>
            )}
          </>
        );
      })}
    </List>
  );
}

type DocsSidebarProps = {
  menuItems: DocsSidebarMenuItemsFragmentFragment[];
};

export function DocsSidebar(props: DocsSidebarProps) {
  const { menuItems } = props;
  const hierarchicalMenuItems = flatListToHierarchical(
    menuItems,
  ) as SidebarMenuItem[];

  return (
    <Box
      component="aside"
      sx={{
        flexShrink: { sm: 0 },
      }}
      aria-label="sidebar">
      <Menu items={hierarchicalMenuItems} />
    </Box>
  );
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
