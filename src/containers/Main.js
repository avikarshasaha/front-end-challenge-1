import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Product from './Product'
import Cart from './Cart'


const Main = () => (
	<div className="shopping-cart-app">
	  <main className="main">
	    <Switch>
	      <Route exact path='/' component={Product}/>
	      <Route path='/cart' component={Cart}/>
	    </Switch>
	  </main>
	</div>
)

export default Main
