import React from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  CardActions, 
  Button, 
  Box, 
  Rating 
} from '@mui/material';
import { ShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material';
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
  const [favorite, setFavorite] = React.useState(false);

  return (
    <Card 
      sx={{ 
        maxWidth: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 30px rgba(0,0,0,0.1)'
        },
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        <Button
          size="small"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            minWidth: 'auto',
            p: 0.5,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.8)',
            color: favorite ? 'error.main' : 'text.secondary',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.9)',
            }
          }}
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? <Favorite /> : <FavoriteBorder />}
        </Button>
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            backgroundColor: 'primary.main',
            color: 'white',
            py: 0.5,
            px: 1.5,
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.5px'
          }}
        >
          {category}
        </Box>
      </Box>
      <CardContent sx={{ flexGrow: 1, pt: 2 }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component={Link} 
          to={`/product/${id}`}
          sx={{ 
            textDecoration: 'none', 
            color: 'text.primary',
            fontWeight: 500,
            display: 'block',
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.1rem',
            '&:hover': {
              color: 'primary.main'
            }
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={rating} precision={0.5} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({rating.toFixed(1)})
          </Typography>
        </Box>
        <Typography 
          variant="h6" 
          color="primary" 
          sx={{ 
            fontWeight: 600,
            fontFamily: '"Montserrat", sans-serif'
          }}
        >
          ${price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          variant="contained" 
          fullWidth 
          startIcon={<ShoppingCart />}
          sx={{ 
            borderRadius: '30px',
            textTransform: 'none',
            py: 1,
            fontWeight: 500,
            letterSpacing: '0.5px'
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;