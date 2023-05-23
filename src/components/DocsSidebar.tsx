import React from 'react';
import Link from 'next/link';
import { flatListToHierarchical } from '@faustwp/core';
import { DocsSidebarMenuItemFragmentFragment } from '__generated__/graphql';
import { gql } from '../__generated__';

type DocsSidebarProps = {
  menuItems: DocsSidebarMenuItemFragmentFragment[];
};

export function DocsSidebar(props: DocsSidebarProps) {
  const { menuItems } = props;

  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items: Array<{}>) {
    return (
      <ul>
        {items.map((item: any) => {
          const { id, path, label, children } = item;

          return (
            <li key={id}>
              <Link href={path ?? ''}>{label ?? ''}</Link>
              {children.length ? renderMenu(children) : null}
            </li>
          );
        })}
      </ul>
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
