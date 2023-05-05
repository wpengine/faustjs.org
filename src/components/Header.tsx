import React from "react";
import Link from "next/link";
import { gql } from "__generated__";
import {
  HeaderGeneralSettingsFragmentFragment,
  PrimaryMenuItemFragmentFragment,
} from "__generated__/graphql";
import styles from "styles/components/Header.module.scss";

type HeaderProps = {
  siteTitle: HeaderGeneralSettingsFragmentFragment["title"];
  siteDescription: HeaderGeneralSettingsFragmentFragment["description"];
  menuItems: PrimaryMenuItemFragmentFragment[];
};

export function Header({ siteTitle, siteDescription, menuItems }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="/" className={styles.brand}>
          <h2 className={styles.siteTitle}>{siteTitle}</h2>
          <p className={styles.siteDescription}>{siteDescription}</p>
        </Link>

        <nav className={styles.nav}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.uri}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
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
