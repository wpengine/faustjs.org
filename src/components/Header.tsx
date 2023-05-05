import React, { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { SkipNavigationLink, NavigationMenu } from 'components';
import {
  HeaderGeneralSettingsFragmentFragment,
  PrimaryMenuItemFragmentFragment,
} from '__generated__/graphql';
import styles from 'styles/components/Header.module.scss';
import { gql } from '../__generated__';

const cx = classNames.bind(styles);

type HeaderProps = {
  siteTitle: HeaderGeneralSettingsFragmentFragment['title'];
  menuItems: PrimaryMenuItemFragmentFragment[];
};

export function Header({ siteTitle = 'Faust.js', menuItems }: HeaderProps) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header className={cx('component')}>
      <SkipNavigationLink />
      <div className={cx('navbar')}>
        <Link href="/" className={cx('brand')}>
          <svg
            className={cx('logo')}
            width="50"
            height="50"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2.29413L2.29411 0H9.64706V9.64707H0V2.29413ZM10.1765 0H19.8235V7.35294L17.4706 9.64707H12.4706L10.1765 7.35294V0ZM22.6471 10.1765L20.3529 12.4706V17.5294L22.6471 19.8235H30V10.1765H22.6471ZM10.1765 30H19.8235V22.6471L17.4706 20.3529H12.4706L10.1765 22.6471V30ZM30 30V22.6471L27.7059 20.3529H20.3529V30H30ZM20.3529 0V7.35294L22.6471 9.64707H30V0H20.3529ZM13.6471 15C13.6471 15.7059 14.2353 16.353 15 16.353C15.7647 16.353 16.3529 15.7647 16.3529 15C16.3529 14.2941 15.7647 13.6471 15 13.6471C14.2941 13.6471 13.6471 14.2353 13.6471 15ZM9.64706 10.1765H0V19.8235H7.29411L9.64706 17.5294V10.1765ZM7.29411 20.3529L9.64706 22.6471V27.7059L7.29411 30H0V20.3529H7.29411Z"
              fill="white"
            />
          </svg>
          <span className={cx('title')}>{siteTitle}</span>
        </Link>

        <button
          type="button"
          className={cx('nav-toggle')}
          onClick={() => setIsNavShown(!isNavShown)}
          aria-label="Toggle navigation"
          aria-controls={cx('primary-navigation')}
          aria-expanded={isNavShown}>
          ☰
        </button>

        <NavigationMenu
          className={cx([
            'primary-navigation',
            isNavShown ? 'show' : undefined,
          ])}
          menuItems={menuItems}
        />
      </div>
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
