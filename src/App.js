import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CategoryCards from './screens/CategoriesScreen';
import CategoryScreen from './screens/CategoryScreen';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <NavBar />
      <div className="main">
        <Switch>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/category" component={CategoryCards} exact></Route>
          <Route path="/category/:category" component={CategoryScreen}></Route>
        </Switch>
      </div>
      <div className="footer">All rights reserved.</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
