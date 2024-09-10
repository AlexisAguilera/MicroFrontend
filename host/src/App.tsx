import React, { useState } from 'react';
import {
  Container,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Lazy load components
const Products = React.lazy(() => import('products/Products'));
const Cart = React.lazy(() => import('cart/Cart'));

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'products' | 'cart'>(
    'products'
  );

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handlePageChange = (page: 'products' | 'cart') => {
    setCurrentPage(page);
    setDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>Host App</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem onClick={() => handlePageChange('products')}>
            <ListItemText primary='Products' />
          </ListItem>
          <ListItem onClick={() => handlePageChange('cart')}>
            <ListItemText primary='Cart' />
          </ListItem>
        </List>
      </Drawer>
      <Container>
        <React.Suspense fallback={<div>Loading...</div>}>
          {currentPage === 'products' && <Products />}
          {currentPage === 'cart' && <Cart />}
        </React.Suspense>
      </Container>
    </Box>
  );
};

export default App;
