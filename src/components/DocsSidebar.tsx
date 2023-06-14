import React from 'react';
import { flatListToHierarchical } from '@faustwp/core';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Typography } from '@mui/material';
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
      console.log(item);
      return (
        <TreeItem nodeId={id} label={label}>
          {children.length ? (
            renderMenu(children)
          ) : (
            <Link href={path ?? ''}>{label ?? ''}</Link>
          )}
        </TreeItem>
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
      <TreeView
        aria-label="Documentation Menu"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpanded={['root']}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
        {renderMenu(hierarchicalMenuItems)}
      </TreeView>
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
