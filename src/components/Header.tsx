import React from 'react';
import { SkipNavigationLink } from 'components';
import classNames from 'classnames/bind';
import {
  HeaderGeneralSettingsFragmentFragment,
  PrimaryMenuItemFragmentFragment,
} from '__generated__/graphql';
import { gql } from '__generated__';
import styles from 'styles/components/Header.module.scss';
import { TopHeaderAppBar } from './TopHeaderAppBar';

const cx = classNames.bind(styles);

type HeaderProps = {
  siteTitle: HeaderGeneralSettingsFragmentFragment['title'];
  menuItems: PrimaryMenuItemFragmentFragment[];
};

export function Header({ siteTitle = 'Faust.js', menuItems }: HeaderProps) {
  return (
    <header className={cx('component')}>
      <SkipNavigationLink />
      <TopHeaderAppBar siteTitle={siteTitle} />
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
  menuItemFragment: gql(`
    fragment PrimaryMenuItemFragment on MenuItem {
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
