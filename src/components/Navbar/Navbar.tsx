import React, { useContext, useState } from 'react';
import { QrCode2 } from '@mui/icons-material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { AppThemeContext } from '../../utils/theme/AppThemeProvider';

const navbarConfig = {
  pages: [
    { name: 'Restaurants', link: '/restaurants' },
    { name: 'Menus', link: '/menus' },
  ],
  settings: [
    { name: 'Profile', link: '/profile' },
    { name: 'Account', link: '/account' },
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Login', link: '/login' },
  ],
};
function Navbar() {
  const { changeTheme, theme } = useContext(AppThemeContext);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const style = {
    navlink: {
      color: 'white',
      fontWeight: 'bold',
      '&:hover': {
        textDecoration: 'underline',
        fontWeight: 'bolder',
      },
    },
    displayMobile: {
      display: { xs: 'flex', md: 'none' },
    },
    displayDesktop: {
      display: { xs: 'none', md: 'flex' },
    },
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'primary.main',
        color: 'common.white',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <QrCode2 sx={[style.displayDesktop, { mr: 1 }]} />
          <Typography
            variant="h6"
            noWrap
            sx={[{ mr: 2 }, style.displayDesktop, style.navlink]}
          >
            <NavLink to="/">QR</NavLink>
          </Typography>
          <Box sx={[{ flexGrow: 1 }, style.displayMobile]}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
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
              }}
            >
              {navbarConfig.pages.map(({ name, link }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={style.navlink}>
                    <NavLink to={link}>{name}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <QrCode2 sx={[style.displayMobile, { mr: 1 }]} />
          <Typography
            variant="h5"
            noWrap
            sx={[{ mr: 2, flexGrow: 1 }, style.displayMobile, style.navlink]}
          >
            <NavLink to="/">QR</NavLink>
          </Typography>
          <Box sx={[{ flexGrow: 1 }, style.displayDesktop]}>
            {navbarConfig.pages.map(({ name, link }) => (
              <Button
                key={name}
                onClick={handleCloseNavMenu}
                variant="outlined"
                sx={style.navlink}
              >
                <NavLink to={link}>{name}</NavLink>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Switch Theme">
              <IconButton onClick={() => changeTheme()} sx={{ pr: 2 }}>
                {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Ugur Kiymetli" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {navbarConfig.settings.map(({ name, link }) => (
                <MenuItem key={name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={style.navlink}>
                    <NavLink to={link}>{name}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
