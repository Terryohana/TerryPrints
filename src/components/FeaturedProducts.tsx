import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

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
    <section className="section-padding" style={{ backgroundColor: '#faf4f7' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="script-heading">Featured Cards</h2>
          <Link to="/shop" className="btn btn-outline">View All</Link>
        </div>
        
        <div className="row">
          {featuredProducts.map((product) => (
            <div className="col col-12 col-sm-6 col-md-3" key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;