import React from 'react';
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
    <section className="section-padding">
      <div className="container">
        <h2 className="script-heading text-center mb-2">Browse by Category</h2>
        <p className="thin-text text-center mb-5">
          Discover our beautiful collection of handcrafted cards for every special occasion
        </p>
        
        <div className="row">
          {categories.map((category) => (
            <div className="col col-12 col-sm-6 col-md-3" key={category.id}>
              <Link to={`/category/${category.id}`} className="category-card">
                <img src={category.image} alt={category.title} />
                <div className="category-content">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-count">{category.count} Products</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;