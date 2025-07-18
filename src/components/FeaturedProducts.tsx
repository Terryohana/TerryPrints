import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

// Sample product data
const featuredProducts = [
  {
    id: '1',
    title: 'Elegant Birthday Card',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5b530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    category: 'Birthday'
  },
  {
    id: '2',
    title: 'Wedding Congratulations',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    category: 'Wedding'
  },
  {
    id: '3',
    title: 'Holiday Greetings',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    category: 'Holiday'
  },
  {
    id: '4',
    title: 'Thank You Card',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
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