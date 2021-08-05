import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductsPage from '../pages/products/ProductsPage'

import Message from '../components/Message'
import ProductDetailPage from '../pages/ProductDetailPage'
import NotFoundPage from '../pages/NotFoundPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Message />
          <ProductsPage />
        </Route>
        <Route path="/product/:productName">
          <ProductDetailPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
