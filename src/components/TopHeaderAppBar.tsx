import * as React from 'react';
import classNames from 'classnames/bind';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from '@mui/material';
import styles from 'styles/components/Header.module.scss';
import LaunchIcon from '@mui/icons-material/Launch';
import { LinkListItem } from './Footer';

const cx = classNames.bind(styles);

const pages = ['test', 'test2', 'Community'];

const leftMenuItems: LinkListItem[] = [
  {
    text: 'Products',
    url: '/',
  },
];

const rightMenuItems: LinkListItem[] = [
  {
    text: 'Help!!!!!!!',
    url: '/',
  },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export function TopHeaderAppBar({ siteTitle }) {
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
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
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
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              <span className={cx('title')}>{siteTitle}</span>
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            <span className={cx('title')}>{siteTitle}</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {leftMenuItems.map((item) => (
              <Link
                href={item.url}
                key={item.url}
                sx={{ color: '#fff', mr: 2 }}>
                {item.text} <LaunchIcon sx={{ ml: 1 }} fontSize="small" />
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {rightMenuItems.map((item) => (
              <Link
                href={item.url}
                key={item.url}
                sx={{ color: '#fff', mr: 2 }}>
                {item.text} <LaunchIcon sx={{ ml: 1 }} fontSize="small" />
              </Link>
            ))}
          </Box>

          <Search sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
