import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';
import {
  HeaderGeneralSettingsFragmentFragment,
  PrimaryMenuItemsFragmentFragment,
  SecondaryMenuItemsFragmentFragment,
} from '__generated__/graphql';
import classNames from 'classnames/bind';
import * as React from 'react';
import styles from 'styles/components/TopHeaderAppBar.module.scss';
import { Typography } from '@mui/material';
import HeaderSearch from './HeaderSearch';
import { Link } from './Link';

const cx = classNames.bind(styles);

type TopHeaderAppBarProps = {
  siteTitle: HeaderGeneralSettingsFragmentFragment['title'];
  primaryMenuItems: PrimaryMenuItemsFragmentFragment[];
  secondaryMenuItems: SecondaryMenuItemsFragmentFragment[];
};

export function TopHeaderAppBar({
  siteTitle,
  primaryMenuItems,
  secondaryMenuItems,
}: TopHeaderAppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: 'none',
        py: '0.25rem',
        borderBottom: '1px solid rgba(0,0,0,0.09)',
        backgroundColor: 'var(--wp--preset--color--base)',
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0.5, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: 'var(--wp--preset--color--contrast)' }}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}>
              {primaryMenuItems.map((item) => (
                <Link
                  href={item.uri}
                  key={item.id}
                  target={item.target}
                  sx={{
                    display: { color: 'var(--wp--preset--color--contrast)' },
                  }}>
                  <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                    {item.label}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Link
            href="/"
            sx={{ display: { xs: 'flex' }, mr: 1, textDecoration: 'none' }}>
            <Image
              className={cx('logo')}
              src="/images/faust-logo-256x256.png"
              alt="Faust.js Logo"
              width={42}
              height={42}
            />
            <Typography
              sx={{
                color: 'var(--wp--preset--color--contrast)',
                fontSize: '1.5rem',
                fontWeight: 600,
                alignSelf: 'center',
                mr: 1,
              }}>
              {siteTitle}
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {primaryMenuItems.map((item) => (
              <Link
                href={item.uri}
                key={item.id}
                target={item.target}
                sx={{
                  mr: 2,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: '0.18s ease',
                  color: 'var(--wp--preset--color--contrast)',
                  '&:hover, &:focus': {
                    opacity: 0.8,
                  },
                }}>
                {item.label}
              </Link>
            ))}
          </Box>

          <HeaderSearch />

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {secondaryMenuItems.map((item) => (
              <Link
                className={cx('social-navigation-link')}
                href={item.uri}
                key={item.id}
                target={item.target}>
                {item.label}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
