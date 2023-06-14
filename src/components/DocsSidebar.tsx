import React from 'react';
import { flatListToHierarchical } from '@faustwp/core';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
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
          <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
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
                        py: '0.25rem',
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
  // return (
  //       <li key={id}>
  //         <Link href={path ?? ''}>{label ?? ''}</Link>
  //         {children.length ? renderMenu(children) : null}
  //       </li>
  //     );

  return (
    <>
      <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
        Documentation Menu
      </Typography>
      {renderMenu(hierarchicalMenuItems)}
    </>
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
