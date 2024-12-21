import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';
import { Button, TextField, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity(id, Math.max(1, quantity)));
  };

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <Grid container spacing={3}>
          {cart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Card>
                <Grid container>
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      alt={item.name}
                      height="140"
                      image={item.image}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <CardContent>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography>Price: ${item.price}</Typography>
                      <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
                        label="Quantity"
                        size="small"
                      />
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        style={{ marginLeft: '10px' }}
                      >
                        Remove
                      </Button>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Cart;
