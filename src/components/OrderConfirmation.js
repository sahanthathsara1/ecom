import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    navigate('/products'); // Navigate to the products page
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=700&q=80"
        alt="Order Confirmation"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Typography variant="h4" gutterBottom>
        Thank you for your order!
      </Typography>
      <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
        Place Another Order
      </Button>
    </div>
  );
};

export default OrderConfirmation;
