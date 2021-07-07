import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header/'
import ProductsPage from '../pages/products/ProductsPage'

// import Header from "./components/Header";

import Message from '../components/Message'
import ProductDetailPage from '../pages/ProductDetailPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Message></Message>
          <ProductsPage></ProductsPage>
        </Route>
        <Route path="/product/:productName">
          <ProductDetailPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
