import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'birthday',
    title: 'Birthday Cards',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 24
  },
  {
    id: 'wedding',
    title: 'Wedding Cards',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 18
  },
  {
    id: 'holiday',
    title: 'Holiday Cards',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    count: 32
  },
  {
    id: 'custom',
    title: 'Custom Cards',
    image: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
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