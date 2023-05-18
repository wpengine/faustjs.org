import React, { useEffect } from 'react';
import Link from 'next/link';
import { flatListToHierarchical } from '@faustwp/core';
import {
  Box,
  Drawer,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  List,
  ListItemButton,
  Divider,
  Collapse,
} from '@mui/material';
import { DocsSidebarMenuItemFragmentFragment } from '__generated__/graphql';
import { gql } from '../__generated__';

const drawerWidth = 240;

type DocsSidebarProps = {
  menuItems: DocsSidebarMenuItemFragmentFragment[];
};

export function DocsSidebar(props: DocsSidebarProps) {
  const { menuItems } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [container, setContainer] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items: Array<{}>) {
    return (
      <List>
        {items.map((item: any) => {
          const { id, path, label, children } = item;

          return (
            <>
              <Link key={id} href={path} style={{ flex: 1 }}>
                <ListItemButton component="div">
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              </Link>
              {children && children.length ? (
                <Collapse sx={{ ml: 2 }} timeout="auto" unmountOnExit>
                  {renderMenu(children)}
                </Collapse>
              ) : null}
            </>
          );
        })}
      </List>
    );
  }

  const drawer = <div>{renderMenu(menuItems)}</div>;

  useEffect(() => {
    setContainer(window !== undefined ? () => window.document.body : undefined);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DocsSidebar.fragments = {
  entry: gql(`
    fragment DocsSidebarMenuItemFragment on MenuItem {
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
