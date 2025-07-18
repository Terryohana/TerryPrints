import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: { xs: 8, md: 10 },
        backgroundImage: 'linear-gradient(135deg, #f8bbd0 0%, #e1bee7 100%)',
        borderRadius: { xs: 0, md: '0 0 50px 50px' },
        mb: 6,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          top: '-100px',
          right: '-100px'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          bottom: '-50px',
          left: '10%'
        }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              className="fancy-script"
              sx={{
                fontWeight: 400,
                mb: 2,
                fontSize: { xs: '3rem', md: '4.5rem' },
                lineHeight: 1.2,
                color: '#4a0072'
              }}
            >
              Beautiful Custom Cards
            </Typography>
            <Typography
              variant="h5"
              className="thin-text"
              sx={{ 
                mb: 4, 
                fontWeight: 300, 
                opacity: 0.9,
                letterSpacing: '1px',
                color: '#4a0072'
              }}
            >
              Premium quality, personalized greeting cards delivered to your doorstep.
              Perfect for birthdays, weddings, holidays, and more.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/shop"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  fontWeight: 500,
                  px: 4,
                  py: 1.5,
                  borderRadius: '30px',
                  backgroundColor: 'white',
                  color: 'primary.main',
                  letterSpacing: '1px',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                Shop Now
              </Button>
              <Button
                component={Link}
                to="/custom"
                variant="outlined"
                size="large"
                sx={{
                  fontWeight: 500,
                  px: 4,
                  py: 1.5,
                  borderRadius: '30px',
                  borderColor: 'white',
                  color: 'white',
                  borderWidth: '2px',
                  letterSpacing: '1px',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                Create Custom
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                position: 'relative',
                height: '450px',
                width: '100%',
                overflow: 'hidden',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  zIndex: 1
                }
              }}
            >
              <Box
                component="img"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                alt="Greeting cards showcase"
                src="https://source.unsplash.com/random/600x400/?greeting,cards"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;