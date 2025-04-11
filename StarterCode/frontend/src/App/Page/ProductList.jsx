import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, CardMedia, CardContent, Typography, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductList = () => {
  const [itemList, setItemList] = useState([]);

  //implement the get products function
  const fetchProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      setItemList(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  //implement the delete function
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      setItemList((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
      );
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Simple Card List
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {itemList.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card sx={{ maxWidth: 345, mx: "auto", position: "relative" }}>
              <CardMedia component="img" height="140" image={item.imageUrl} alt={item.name} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.name}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  ${item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <IconButton onClick={() => handleDelete(item.id)} sx={{ position: "absolute", top: 10, left: 10 }} color="error" >
                <DeleteIcon/>
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
