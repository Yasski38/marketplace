import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";
import { ProductList } from './ProductList';
import { Cart } from './Cart';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <Router>
        <CartProvider>
          <div>
          <nav class="topnav"> 
    	          <ul>
    	            <li>
    	              <Link to="/">Home</Link>
    	            </li>
    	            <li>
    	              <Link to="/signin">Sign In</Link>
    	            </li>
    	            <li>
    	              <Link to="/signup">Sign Up</Link>
    	            </li>
    	          </ul>
    	        </nav>
    	        <Switch>
    	          <Route path="/signin">
    	            <Signin />
    	          </Route>
    	          <Route path="/signup">
    	            <Signup />
    	          </Route>
    	          <Route path="/">
    	            <Home />
    	            <Cart />
            <ProductList />
    	          </Route>
    	        </Switch>
            
          </div>
        </CartProvider>
    </Router>
  )
  
  
  
}
function Home() {
    return <div> 
    
    <div class="title">Tous nos produits</div>

    </div>
    ;
    
  }

  function Signin() {
    return <div class="login">
  <div class="login-triangle"></div>
  
  <h2 class="login-header">Log in</h2>

  <form class="login-container">
    <p><input type="email" placeholder="Email"/></p>
    <p><input type="password" placeholder="Password"/></p>
    <p><input type="submit" value="Log in"/></p>
  </form>
</div>;
  }

  function Signup() {
    return <div class="login">
  <div class="login-triangle"></div>
  
  <h2 class="login-header">Sign Up</h2>

  <form class="login-container">
  	<p><input type="name" placeholder="Prénom"/></p>
    <p><input type="firstname" placeholder="Nom"/></p>
    <p><input type="email" placeholder="Email"/></p>
    <p><input type="password" placeholder="Password"/></p>
    <p><input type="submit" value="Sign Up"/></p>
  </form>
</div>;
  }


render(<App />, document.getElementById('root'));
