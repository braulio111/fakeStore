import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

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

  return (
    <>
    <div className="category__header">
      <Link to="/category" className="categories__link">←  Categories</Link>
      <Link to="/category" className="categories__link-mobile">←</Link>
      <h1 className="category__title">{category.toUpperCase()}</h1>
    </div>
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
