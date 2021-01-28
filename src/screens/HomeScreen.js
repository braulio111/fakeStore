import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function Product(props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
    <h1>Products</h1>
    <div className="cards-wrap">
      {
        products.map(product => {
          return (
            <ProductCard key={product.id} id={product.id} image={product.image} title={product.title} desc={product.description} price={product.price}/>
          );
        })
      }
    </div>
    </>
  )
}
