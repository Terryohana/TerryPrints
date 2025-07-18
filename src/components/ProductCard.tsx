import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  title, 
  price, 
  image, 
  rating, 
  category 
}) => {
  const [favorite, setFavorite] = useState(false);

  // Function to render stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`} className="star">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half-star" className="star half">★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="card mb-4">
      <div style={{ position: 'relative' }}>
        <img src={image} alt={title} className="card-img" />
        <button 
          className="favorite-btn" 
          onClick={() => setFavorite(!favorite)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: favorite ? '#e91e63' : '#666'
          }}
        >
          {favorite ? '❤️' : '♡'}
        </button>
        <span 
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: '#e91e63',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 500
          }}
        >
          {category}
        </span>
      </div>
      <div className="card-body">
        <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 className="card-title">{title}</h3>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ color: '#ffc107', marginRight: '8px' }}>
            {renderStars(rating)}
          </div>
          <span style={{ color: '#666', fontSize: '0.875rem' }}>({rating.toFixed(1)})</span>
        </div>
        <p className="elegant-heading" style={{ color: '#e91e63', fontWeight: 600, fontSize: '1.25rem', marginBottom: '16px' }}>
          ${price.toFixed(2)}
        </p>
        <button className="btn btn-primary btn-block">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;