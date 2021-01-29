import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryScreen from './screens/CategoryScreen';

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
          <a href="/category">Categories</a>
        </div>
      </div>
      <div className="main">
        <Switch>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/category" component={CategoriesScreen}></Route>
        </Switch>
      </div>
      <div className="footer">All rights reserved.</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
