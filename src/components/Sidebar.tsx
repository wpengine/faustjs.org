import React from 'react';
import { gql } from '../__generated__';

export function Sidebar() {
  return (
    <aside>
      Sidebar Content
    </aside>
  );
}

Sidebar.fragments = {
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
  `)
}
