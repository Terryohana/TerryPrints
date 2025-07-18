import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Menu, 
  MenuItem, 
  Container,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material';
import { 
  ShoppingCart, 
  Menu as MenuIcon, 
  Person, 
  Search 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { title: 'Birthday Cards', path: '/category/birthday' },
    { title: 'Wedding Cards', path: '/category/wedding' },
    { title: 'Holiday Cards', path: '/category/holiday' },
    { title: 'Custom Cards', path: '/custom' }
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography 
          variant="h6" 
          className="fancy-script"
          sx={{ 
            fontWeight: 400,
            fontSize: '2rem',
            color: 'primary.main',
            mb: 2
          }}
        >
          TerryPrints
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path}
              sx={{
                py: 1.5,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(233, 30, 99, 0.08)'
                }
              }}
            >
              <ListItemText 
                primary={item.title} 
                primaryTypographyProps={{
                  sx: {
                    fontWeight: 300,
                    letterSpacing: '0.5px'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            to="/about"
            sx={{
              py: 1.5,
              px: 3,
              '&:hover': {
                backgroundColor: 'rgba(233, 30, 99, 0.08)'
              }
            }}
          >
            <ListItemText 
              primary="About" 
              primaryTypographyProps={{
                sx: {
                  fontWeight: 300,
                  letterSpacing: '0.5px'
                }
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            to="/contact"
            sx={{
              py: 1.5,
              px: 3,
              '&:hover': {
                backgroundColor: 'rgba(233, 30, 99, 0.08)'
              }
            }}
          >
            <ListItemText 
              primary="Contact" 
              primaryTypographyProps={{
                sx: {
                  fontWeight: 300,
                  letterSpacing: '0.5px'
                }
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={0} 
      sx={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            className="fancy-script"
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 400,
              fontSize: '2rem',
              color: 'primary.main',
              textDecoration: 'none',
              flexGrow: isMobile ? 1 : 0
            }}
          >
            TerryPrints
          </Typography>

          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <Button 
                onClick={handleMenuOpen}
                sx={{ 
                  mx: 1, 
                  color: 'text.primary', 
                  display: 'block',
                  fontWeight: 300,
                  letterSpacing: '0.5px',
                  '&:hover': {
                    backgroundColor: 'rgba(233, 30, 99, 0.08)'
                  }
                }}
              >
                Categories
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    borderRadius: '8px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem 
                    key={item.title} 
                    onClick={handleMenuClose}
                    component={Link}
                    to={item.path}
                    sx={{
                      fontWeight: 300,
                      letterSpacing: '0.5px',
                      py: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(233, 30, 99, 0.08)'
                      }
                    }}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
              <Button
                component={Link}
                to="/about"
                sx={{ 
                  mx: 1, 
                  color: 'text.primary', 
                  display: 'block',
                  fontWeight: 300,
                  letterSpacing: '0.5px',
                  '&:hover': {
                    backgroundColor: 'rgba(233, 30, 99, 0.08)'
                  }
                }}
              >
                About
              </Button>
              <Button
                component={Link}
                to="/contact"
                sx={{ 
                  mx: 1, 
                  color: 'text.primary', 
                  display: 'block',
                  fontWeight: 300,
                  letterSpacing: '0.5px',
                  '&:hover': {
                    backgroundColor: 'rgba(233, 30, 99, 0.08)'
                  }
                }}
              >
                Contact
              </Button>
            </Box>
          )}

          <Box sx={{ display: 'flex' }}>
            <IconButton 
              color="inherit" 
              aria-label="search"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(233, 30, 99, 0.08)'
                }
              }}
            >
              <Search />
            </IconButton>
            <IconButton 
              color="inherit" 
              aria-label="account" 
              component={Link} 
              to="/account"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(233, 30, 99, 0.08)'
                }
              }}
            >
              <Person />
            </IconButton>
            <IconButton 
              color="inherit" 
              aria-label="cart" 
              component={Link} 
              to="/cart"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(233, 30, 99, 0.08)'
                }
              }}
            >
              <ShoppingCart />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;