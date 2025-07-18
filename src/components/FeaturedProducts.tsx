import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

// Sample product data
const featuredProducts = [
  {
    id: '1',
    title: 'Elegant Birthday Card',
    price: 4.99,
    image: 'https://source.unsplash.com/random/600x400/?birthday,card',
    rating: 4.5,
    category: 'Birthday'
  },
  {
    id: '2',
    title: 'Wedding Congratulations',
    price: 5.99,
    image: 'https://source.unsplash.com/random/600x400/?wedding,card',
    rating: 4.8,
    category: 'Wedding'
  },
  {
    id: '3',
    title: 'Holiday Greetings',
    price: 3.99,
    image: 'https://source.unsplash.com/random/600x400/?christmas,card',
    rating: 4.2,
    category: 'Holiday'
  },
  {
    id: '4',
    title: 'Thank You Card',
    price: 3.49,
    image: 'https://source.unsplash.com/random/600x400/?thank,you,card',
    rating: 4.7,
    category: 'Gratitude'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" fontWeight={600}>
            Featured Cards
          </Typography>
          <Button 
            component={Link} 
            to="/shop" 
            variant="outlined" 
            sx={{ 
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 500
            }}
          >
            View All
          </Button>
        </Box>
        
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;