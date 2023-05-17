import React from 'react';
import { gql } from '../__generated__';

export function DocsSidebar() {
  return <aside>Sidebar Content</aside>;
}

DocsSidebar.fragments = {
  entry: gql(`
    fragment SidebarMenuItemFragment on MenuItem {
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
