import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link as MuiLink, 
  IconButton, 
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Pinterest, 
  Email, 
  Phone, 
  LocationOn 
} from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f8f9fa', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              TerryPrints
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Premium quality, personalized greeting cards for every occasion. 
              We help you celebrate life's special moments with beautiful, custom-designed cards.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="primary" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="primary" aria-label="Pinterest">
                <Pinterest />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>
            <List dense disablePadding>
              {['Home', 'Shop', 'About Us', 'Contact', 'FAQ'].map((text) => (
                <ListItem key={text} disablePadding sx={{ pb: 0.5 }}>
                  <MuiLink 
                    component={Link} 
                    to={`/${text.toLowerCase().replace(' ', '-')}`}
                    underline="hover"
                    color="text.secondary"
                  >
                    {text}
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </Grid>
          
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Categories
            </Typography>
            <List dense disablePadding>
              {['Birthday Cards', 'Wedding Cards', 'Holiday Cards', 'Custom Cards', 'Thank You Cards'].map((text) => (
                <ListItem key={text} disablePadding sx={{ pb: 0.5 }}>
                  <MuiLink 
                    component={Link} 
                    to={`/category/${text.toLowerCase().replace(' ', '-')}`}
                    underline="hover"
                    color="text.secondary"
                  >
                    {text}
                  </MuiLink>
                </ListItem>
              ))}
            </List>
          </Grid>
          
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Contact Us
            </Typography>
            <List dense disablePadding>
              <ListItem disablePadding sx={{ pb: 1 }}>
                <LocationOn fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                <ListItemText 
                  primary="123 Print Street, Card City, CP 12345"
                  primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ pb: 1 }}>
                <Phone fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                <ListItemText 
                  primary="+1 (555) 123-4567"
                  primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ pb: 1 }}>
                <Email fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                <ListItemText 
                  primary="info@terryprints.com"
                  primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} TerryPrints. All rights reserved.
          </Typography>
          <Box>
            <MuiLink 
              component={Link} 
              to="/privacy-policy"
              underline="hover"
              color="text.secondary"
              sx={{ mr: 2, fontSize: '0.875rem' }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink 
              component={Link} 
              to="/terms-of-service"
              underline="hover"
              color="text.secondary"
              sx={{ fontSize: '0.875rem' }}
            >
              Terms of Service
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;