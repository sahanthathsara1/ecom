import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions'; // Assume you have an addToCart action

// Dummy product data
const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: 199.99,
    image: 'https://via.placeholder.com/150/0000FF/808080?Text=Smartphone',
  },
  {
    id: 2,
    name: 'Laptop',
    price: 899.99,
    image: 'https://via.placeholder.com/150/FF5733/FFFFFF?Text=Laptop',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 49.99,
    image: 'https://via.placeholder.com/150/FFC300/FFFFFF?Text=Headphones',
  },
  {
    id: 4,
    name: 'Smartwatch',
    price: 129.99,
    image: 'https://via.placeholder.com/150/581845/FFFFFF?Text=Smartwatch',
  },
  {
    id: 5,
    name: 'Camera',
    price: 299.99,
    image: 'https://via.placeholder.com/150/900C3F/FFFFFF?Text=Camera',
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    price: 19.99,
    image: 'https://via.placeholder.com/150/C70039/FFFFFF?Text=Wireless+Mouse',
  },
];

const Products = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Products
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  ${product.price.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleAddToCart(product)}
                  style={{ marginTop: '10px' }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
