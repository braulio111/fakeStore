import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Loader from 'react-loader-spinner';
import { FaSteam } from 'react-icons/fa';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get('https://fakestoreapi.com/products')
        .then(response => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch(err => console.log(err))
    }
    fetchProducts();
  }, []);

  return (
    <>
    {
    loading ? <Loader type="Circles" color="#000" className="loading_icon"></Loader> : 
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
    }
    </>
  )
}
