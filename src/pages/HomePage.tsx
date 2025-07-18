import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import Subscription from '../components/Subscription';
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Subscription />
    </Box>
  );
};

export default HomePage;