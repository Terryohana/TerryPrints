import React from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'birthday',
    title: 'Birthday Cards',
    image: 'https://source.unsplash.com/random/600x400/?birthday',
    count: 24
  },
  {
    id: 'wedding',
    title: 'Wedding Cards',
    image: 'https://source.unsplash.com/random/600x400/?wedding',
    count: 18
  },
  {
    id: 'holiday',
    title: 'Holiday Cards',
    image: 'https://source.unsplash.com/random/600x400/?christmas',
    count: 32
  },
  {
    id: 'custom',
    title: 'Custom Cards',
    image: 'https://source.unsplash.com/random/600x400/?design',
    count: 15
  }
];

const Categories: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          className="script-heading"
          sx={{ 
            mb: 2, 
            textAlign: 'center',
            fontSize: { xs: '2.2rem', md: '3rem' },
            fontWeight: 500
          }}
        >
          Browse by Category
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 6, 
            textAlign: 'center', 
            maxWidth: 700, 
            mx: 'auto',
            fontWeight: 300,
            letterSpacing: '0.5px'
          }}
        >
          Discover our beautiful collection of handcrafted cards for every special occasion
        </Typography>
        
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.id}>
              <Paper
                component={Link}
                to={`/category/${category.id}`}
                sx={{
                  position: 'relative',
                  height: 200,
                  overflow: 'hidden',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    zIndex: 1
                  }
                }}
              >
                <Box
                  component="img"
                  src={category.image}
                  alt={category.title}
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                  <Typography 
                    variant="h5" 
                    className="script-heading"
                    sx={{ 
                      fontWeight: 600,
                      mb: 1,
                      fontSize: '1.8rem'
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{
                      fontWeight: 300,
                      letterSpacing: '1px',
                      opacity: 0.9
                    }}
                  >
                    {category.count} Products
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;