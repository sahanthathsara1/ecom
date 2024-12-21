import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions';
import { Button, Typography, List, ListItem, ListItemText } from '@mui/material';

const OrderConfirmation = () => {
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    alert('Order placed successfully!');
  };

  // Dummy order data
  const orderData = {
    items: [
      { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
      { id: 2, name: 'Product 2', price: 9.99, quantity: 1 },
      { id: 3, name: 'Product 3', price: 14.99, quantity: 3 },
    ],
    totalPrice: 99.94,
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img
        src="https://media.istockphoto.com/id/2140172947/photo/women-using-laptop-shopping-online-with-cart-icons-with-a-virtual-interface-shipping-global.jpg?s=1024x1024&w=is&k=20&c=RVdVeWRb1fTx9sV1WfN_Mnjt8a6P6EpEsH44sTkjc_s="
        alt="Order Confirmation"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Typography variant="h4" gutterBottom>
        Thank you for your order!
      </Typography>
      
      {/* Display order summary */}
      <Typography variant="h6" gutterBottom>
        Order Summary:
      </Typography>
      <List>
        {orderData.items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`${item.name} (x${item.quantity})`}
              secondary={`$${(item.price * item.quantity).toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
      
      <Typography variant="h5" gutterBottom>
        Total: ${orderData.totalPrice.toFixed(2)}
      </Typography>

      <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
        Place Another Order
      </Button>
    </div>
  );
};

export default OrderConfirmation;
