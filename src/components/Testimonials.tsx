import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar, 
  Rating 
} from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    avatar: 'https://source.unsplash.com/random/100x100/?woman,portrait,1',
    rating: 5,
    text: 'The quality of these cards is exceptional! I ordered custom birthday cards for my family and they were absolutely perfect. The printing was crisp and the paper quality was premium.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    avatar: 'https://source.unsplash.com/random/100x100/?man,portrait,1',
    rating: 4.5,
    text: 'We use TerryPrints for all our corporate greeting cards. The designs are professional and the ordering process is seamless. Our clients always appreciate the personal touch.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Wedding Planner',
    avatar: 'https://source.unsplash.com/random/100x100/?woman,portrait,2',
    rating: 5,
    text: 'I recommend TerryPrints to all my wedding clients for their thank you cards. The customization options are endless and the quality is consistently outstanding.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" fontWeight={600} sx={{ mb: 2, textAlign: 'center' }}>
          What Our Customers Say
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
          Don't just take our word for it. Here's what our customers have to say about their experience with TerryPrints.
        </Typography>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                <CardContent sx={{ flexGrow: 1, position: 'relative', pt: 5 }}>
                  <FormatQuote 
                    sx={{ 
                      position: 'absolute', 
                      top: 16, 
                      left: 16, 
                      fontSize: 40, 
                      color: 'primary.light',
                      opacity: 0.3
                    }} 
                  />
                  <Typography variant="body1" paragraph>
                    {testimonial.text}
                  </Typography>
                  <Rating value={testimonial.rating} precision={0.5} readOnly sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;