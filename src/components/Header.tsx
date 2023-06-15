import React from 'react';
import { SkipNavigationLink } from 'components';
import classNames from 'classnames/bind';
import {
  HeaderGeneralSettingsFragmentFragment,
  PrimaryMenuItemsFragmentFragment,
  SecondaryMenuItemsFragmentFragment,
} from '__generated__/graphql';
import { gql } from '__generated__';
import { TopHeaderAppBar } from './TopHeaderAppBar';
import { Box } from '@mui/material';

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
    <Box>
      <SkipNavigationLink />
      <TopHeaderAppBar
        siteTitle={siteTitle}
        primaryMenuItems={primaryMenuItems}
        secondaryMenuItems={secondaryMenuItems}
      />
    </Box>
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
      target
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
      target
    }
  `),
};
