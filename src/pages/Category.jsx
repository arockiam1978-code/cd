import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Product from '../components/Product';

export default function Category() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            axios.get('https://fakestoreapi.com/products')
                .then(response => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        }
        
        fetchProducts();

    }, []);

    return <Box sx={{ width: '80vw', margin: '10px auto' }}>
        {products.length === 0 && <p>Loading Products....</p>}
        {products.length &&
            <Box>
                <h1>All Products</h1>
                <Grid container>
                    {products.map((product) => {
                        return <Grid key={product.id} spacing={2} size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
                            <Product
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                            />
                        </Grid>
                    })}
                </Grid>
            </Box>
        }
    </Box>
};