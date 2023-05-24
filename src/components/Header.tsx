import React from 'react';
import { SkipNavigationLink } from 'components';
import classNames from 'classnames/bind';
import {
  HeaderGeneralSettingsFragmentFragment,
  PrimaryMenuItemsFragmentFragment,
  SecondaryMenuItemsFragmentFragment,
} from '__generated__/graphql';
import { gql } from '__generated__';
import styles from 'styles/components/Header.module.scss';
import { TopHeaderAppBar } from './TopHeaderAppBar';

const cx = classNames.bind(styles);

type HeaderProps = {
  siteTitle: HeaderGeneralSettingsFragmentFragment['title'];
  primaryMenuItems: PrimaryMenuItemsFragmentFragment[] | any;
  secondaryMenuItems: SecondaryMenuItemsFragmentFragment[] | any;
};

export function Header({
  siteTitle = 'Faust.js',
  primaryMenuItems,
  secondaryMenuItems,
}: HeaderProps) {
  return (
    <header className={cx('component')}>
      <SkipNavigationLink />
      <TopHeaderAppBar
        siteTitle={siteTitle}
        primaryMenuItems={primaryMenuItems}
        secondaryMenuItems={secondaryMenuItems}
      />
    </header>
  );
}

Header.fragments = {
  generalSettingsFragment: gql(`
    fragment HeaderGeneralSettingsFragment on GeneralSettings {
      title
      description
    }
  `),
  primaryMenuItemsFragment: gql(`
    fragment PrimaryMenuItemsFragment on MenuItem {
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
  secondaryMenuItemsFragment: gql(`
    fragment SecondaryMenuItemsFragment on MenuItem {
      id
      uri
      label
      description
      target
    }
  `),
};
