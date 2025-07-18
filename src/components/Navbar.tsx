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
  ListItemText
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
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.title} component={Link} to={item.path}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'Poppins',
              fontWeight: 700,
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
                sx={{ my: 2, color: 'text.primary', display: 'block' }}
              >
                Categories
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {menuItems.map((item) => (
                  <MenuItem 
                    key={item.title} 
                    onClick={handleMenuClose}
                    component={Link}
                    to={item.path}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
              <Button
                component={Link}
                to="/about"
                sx={{ my: 2, color: 'text.primary', display: 'block' }}
              >
                About
              </Button>
              <Button
                component={Link}
                to="/contact"
                sx={{ my: 2, color: 'text.primary', display: 'block' }}
              >
                Contact
              </Button>
            </Box>
          )}

          <Box sx={{ display: 'flex' }}>
            <IconButton color="inherit" aria-label="search">
              <Search />
            </IconButton>
            <IconButton color="inherit" aria-label="account" component={Link} to="/account">
              <Person />
            </IconButton>
            <IconButton color="inherit" aria-label="cart" component={Link} to="/cart">
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