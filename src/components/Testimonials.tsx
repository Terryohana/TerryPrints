import React from 'react';

import { testimonialAvatars } from '../assets/imageUrls';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    avatar: testimonialAvatars[0],
    rating: 5,
    text: 'The quality of these cards is exceptional! I ordered custom birthday cards for my family and they were absolutely perfect. The printing was crisp and the paper quality was premium.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    avatar: testimonialAvatars[1],
    rating: 4.5,
    text: 'We use TerryPrints for all our corporate greeting cards. The designs are professional and the ordering process is seamless. Our clients always appreciate the personal touch.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Wedding Planner',
    avatar: testimonialAvatars[2],
    rating: 5,
    text: 'I recommend TerryPrints to all my wedding clients for their thank you cards. The customization options are endless and the quality is consistently outstanding.'
  }
];

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

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="script-heading text-center mb-2">What Our Customers Say</h2>
        <p className="thin-text text-center mb-5">
          Don't just take our word for it. Here's what our customers have to say about their experience with TerryPrints.
        </p>
        
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="col col-12 col-md-4" key={testimonial.id}>
              <div className="card testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div style={{ color: '#ffc107', marginBottom: '16px' }}>
                  {renderStars(testimonial.rating)}
                </div>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="testimonial-avatar"
                  />
                  <div>
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;