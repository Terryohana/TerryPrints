import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import Subscription from '../components/Subscription';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Subscription />
    </main>
  );
};

export default HomePage;