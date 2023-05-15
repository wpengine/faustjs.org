import React from 'react';
import classNames from 'classnames/bind';
import { gql } from '@apollo/client';
import Link from 'next/link';
import { flatListToHierarchical } from '@faustwp/core';
import { PrimaryMenuItemFragmentFragment } from '__generated__/graphql';
import styles from 'styles/components/NavigationMenu.module.scss';
import stylesFromWP from 'styles/components/NavigationMenuClassesFromWP.module.scss';

const cx = classNames.bind(styles);
const cxFromWp = classNames.bind(stylesFromWP);

type NavigationMenuProps = {
  className: string;
  direction?: string;
  menuItems: PrimaryMenuItemFragmentFragment[];
};

export function NavigationMenu({
  className,
  direction = 'row',
  menuItems,
}: NavigationMenuProps) {
  if (!menuItems) {
    return null;
  }

  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items: any) {
    return (
      <ul className={cx('menu')}>
        {items.map((item: any) => {
          const { id, path, label, children, cssClasses } = item;

          // @TODO - Remove guard clause after ghost menu items are no longer appended to array.
          if (!Object.prototype.hasOwnProperty.call(item, '__typename')) {
            return null;
          }

          return (
            <li key={id} className={cxFromWp(cssClasses)}>
              <Link href={path ?? ''} legacyBehavior>
                {label ?? ''}
              </Link>
              {children.length ? renderMenu(children) : null}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <nav
      className={cx(['component', className, direction])}
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
      {renderMenu(hierarchicalMenuItems)}
    </nav>
  );
}

NavigationMenu.fragments = {
  entry: gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
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
  `,
};
