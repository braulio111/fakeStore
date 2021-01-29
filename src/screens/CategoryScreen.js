import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function CategoryScreen(props) {
  const [products, setProducts] = useState([]);
  const category = props.match.params.category;

  useEffect(() => {
    const fetchProducts = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    setProducts(data);
    }
    fetchProducts();
  }, [category]);

  console.log(category);
  console.log(products);

  return (
    <>
    <h1>{category.toUpperCase()}</h1>
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
