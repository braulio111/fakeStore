import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import CategoryCards from '../components/CategoryCards'
import CategoryScreen from './CategoryScreen'

export default function CategoriesScreen() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/category/:category" component={CategoryScreen}></Route>
      <Route path="/category" component={CategoryCards}></Route>
    </Switch>
    </BrowserRouter>
  )
}
