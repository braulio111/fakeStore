import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CategoriesScreen from './screens/CategoriesScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <div className="header">
        <div className="header__title">
          <a href="/">FakeStore</a>
        </div>
        <div className="header__links">
          <a href="/">Products</a>
          <a href="/categories">Categories</a>
        </div>
      </div>
      <div className="main">
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/categories" component={CategoriesScreen}></Route>
      </div>
      <div className="footer">All rights reserved.</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
