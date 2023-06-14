import React from 'react';
import { flatListToHierarchical } from '@faustwp/core';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
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
    return (
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
        {items.map((item: any) => {
          const { id, path, label, children } = item;
          return (
            <TreeItem nodeId={id} label={label}>
              <TreeItem nodeId="2" label="Calendar" />
            </TreeItem>
            // <TreeItem nodeId="5" label="Documents">
            //   <TreeItem nodeId="10" label="OSS" />
            //   <TreeItem nodeId="6" label="MUI">
            //     <TreeItem nodeId="8" label="index.js" />
            //   </TreeItem>
            // </TreeItem>
          );
        })}
      </TreeView>
      // <ul>
      //   {items.map((item: any) => {
      //     const { id, path, label, children } = item;

      //     return (
      //       <li key={id}>
      //         <Link href={path ?? ''}>{label ?? ''}</Link>
      //         {children.length ? renderMenu(children) : null}
      //       </li>
      //     );
      //   })}
      // </ul>
    );
  }

  return (
    <aside>
      <nav
        role="navigation"
        aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
        {renderMenu(hierarchicalMenuItems)}
      </nav>
    </aside>
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
