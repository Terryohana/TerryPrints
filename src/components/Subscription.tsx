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
        backgroundImage: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid xs={12} md={6}>
            <Typography variant="h4" component="h2" fontWeight={600} gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
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
                  fontWeight: 600
                }}
              >
                Subscribe
              </Button>
            </Paper>
          </Grid>
          <Grid xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
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