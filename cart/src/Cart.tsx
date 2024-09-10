import React from 'react';
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Grid,
} from '@mui/material';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cartItems: CartItem[] = [
  { id: 1, name: 'Product A', price: 29.99, quantity: 2 },
  { id: 2, name: 'Product B', price: 39.99, quantity: 1 },
  { id: 3, name: 'Product C', price: 49.99, quantity: 3 },
];

const Cart: React.FC = () => {
  const calculateTotal = (items: CartItem[]) => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Container>
      <Typography variant='h4' component='h1' gutterBottom>
        Shopping Cart
      </Typography>
      <Paper style={{ padding: 16 }}>
        <List>
          {cartItems.map((item) => (
            <div key={item.id}>
              <ListItem>
                <ListItemText
                  primary={item.name}
                  secondary={`Price: $${item.price.toFixed(2)} x ${
                    item.quantity
                  }`}
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
        <Grid container justifyContent='flex-end' style={{ marginTop: 16 }}>
          <Typography variant='h6'>
            Total: ${calculateTotal(cartItems)}
          </Typography>
        </Grid>
        <Button variant='contained' color='primary' style={{ marginTop: 16 }}>
          Checkout
        </Button>
      </Paper>
    </Container>
  );
};

export default Cart;
