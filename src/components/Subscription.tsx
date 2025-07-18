import React, { useState } from 'react';

const Subscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Subscription email:', email);
    setEmail('');
    setError('');
    setSuccess(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section className="subscription">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-12 col-md-6">
            <h2 className="script-heading mb-2">Subscribe to Our Newsletter</h2>
            <p className="thin-text mb-4">
              Stay updated with our latest card designs, exclusive offers, and seasonal promotions.
              Subscribe now and get 10% off your first order!
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="subscription-form">
                <input
                  type="email"
                  className="subscription-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </div>
              {error && <p style={{ color: '#d32f2f', marginTop: '8px', fontSize: '0.875rem' }}>{error}</p>}
              {success && (
                <div style={{ 
                  backgroundColor: 'rgba(76, 175, 80, 0.1)', 
                  color: '#4caf50', 
                  padding: '12px', 
                  borderRadius: '4px', 
                  marginTop: '16px' 
                }}>
                  Thank you for subscribing! Check your email for the discount code.
                </div>
              )}
            </form>
          </div>
          <div className="col col-12 col-md-6 d-none d-md-block">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100%' 
            }}>
              <img
                src="https://source.unsplash.com/random/600x400/?newsletter,mail"
                alt="Newsletter"
                style={{
                  maxWidth: '100%',
                  maxHeight: '300px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;