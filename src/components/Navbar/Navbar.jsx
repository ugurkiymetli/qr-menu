import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { QrCode2 } from '@mui/icons-material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { NavLink } from 'react-router-dom';
import { AppThemeContext } from '../../utils/theme/AppThemeProvider';
import { pages, settings } from './consts';

function Navbar() {
  const { changeTheme, theme } = useContext(AppThemeContext);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const style = {
    navlink: {
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
            sx={[{ mr: 2 }, style.displayDesktop, style.navlin]}
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
              {pages.map(({ name, link }) => (
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
            {pages.map(({ name, link }) => (
              <Button
                key={name}
                onClick={handleCloseNavMenu}
                variant="link"
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
              {settings.map(({ name, link }) => (
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
