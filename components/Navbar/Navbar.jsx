import * as React from 'react';
import { useState } from 'react';
import Account from './Account';
import CustomButton from './CustomButton';
import MobileMenu from './MobileMenu';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  MenuItem, 
  Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { TbChartDots3 } from 'react-icons/tb';


const pages = ['Products', 'Pricing', 'Blog'];


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <IconButton color='inherit' size='1rem' sx={{ display: { sm:'none', md:'flex'}}}>
            <TbChartDots3/>
          </IconButton>
          <Typography variant="h6" noWrap component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 600,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NextGen CMS
          </Typography>

          {/* Regular menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }} keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* Mobile menu */}
          <MobileMenu handleCloseNavMenu={handleCloseNavMenu}/>

          {/* Account section */}
          <Box sx={{ flexGrow: 0 }}>
            {isLogin ? <Account/> 
            : <CustomButton text="SIGN IN" link="#click" type="outlined"/>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;