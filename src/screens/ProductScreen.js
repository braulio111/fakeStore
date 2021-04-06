import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

export default function ProductScreen(props) {
  const [product, setProduct] = useState({
    category: ""
  });
  const [loading, setLoading] = useState(true);
  const id_product = props.match.params.id;

  useEffect(() => {
    const fetchProducts = async () => {
    await axios.get(`https://fakestoreapi.com/products/${id_product}`)
      .then(response => {
        if (response.data === null) {
          throw Error("Invalid Product")
        } else {
          setProduct(response.data);
          setLoading(false)
        }
      })
      .catch(err => console.log(err));
    }
    fetchProducts();
  }, [id_product]);

  return(
    <>
      {
      loading ? <Loader type="Circles" color="#000" className="loading_icon"></Loader> : 
      <>
      <Link to="/" className="products__link">←  Products</Link>
      <Link to="/" className="back-arrow products__link-mobile">←</Link>
      <div className="product">
        <div className="product__title-img">
          <h1 className="product__title">{product.title}</h1>
          <img src={product.image} alt="" className="product_image" height="450px" width="340px" />
        </div>
        <div className="product__info">
          <h3 className="product__category">{product.category.toUpperCase()}</h3>
          <h2 className="product__price">${product.price}</h2>
          <p className="product__desc">{product.description}</p>
          <button className="product__cart">Add to cart</button>
        </div>
      </div>
      </>
      }
    </>
  );
}
