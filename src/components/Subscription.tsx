import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Grid,
  Snackbar,
  Alert
} from '@mui/material';
import { MailOutline } from '@mui/icons-material';

const Subscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [error, setError] = useState('');

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
    setOpenSnackbar(true);
  };

  return (
    <Box 
      sx={{ 
        py: 8, 
        backgroundColor: 'primary.main',
        color: 'white',
        backgroundImage: 'linear-gradient(135deg, #f8bbd0 0%, #e1bee7 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          top: '-150px',
          left: '-100px'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          bottom: '-80px',
          right: '10%'
        }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3" 
              component="h2" 
              className="script-heading"
              sx={{ 
                fontWeight: 500,
                mb: 2,
                fontSize: { xs: '2.2rem', md: '3rem' },
                color: '#4a0072'
              }}
            >
              Subscribe to Our Newsletter
            </Typography>
            <Typography 
              variant="body1" 
              className="thin-text"
              sx={{ 
                mb: 4, 
                opacity: 0.9,
                letterSpacing: '1px',
                lineHeight: 1.7,
                color: '#4a0072'
              }}
            >
              Stay updated with our latest card designs, exclusive offers, and seasonal promotions.
              Subscribe now and get 10% off your first order!
            </Typography>
            
            <Paper
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                borderRadius: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
              }}
            >
              <MailOutline sx={{ color: 'text.secondary', ml: 2 }} />
              <TextField
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error}
                helperText={error}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <Button 
                type="submit" 
                variant="contained" 
                sx={{ 
                  borderRadius: '50px',
                  m: 1,
                  px: 3,
                  py: 1,
                  textTransform: 'none',
                  fontWeight: 500,
                  letterSpacing: '1px'
                }}
              >
                Subscribe
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400/?newsletter,mail"
                alt="Newsletter"
                sx={{
                  maxWidth: '100%',
                  maxHeight: '300px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Thank you for subscribing! Check your email for the discount code.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Subscription;