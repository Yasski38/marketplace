import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Product = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const product = { name: props.name, price: props.price, image:props.img };
    setCart(currentState => [...currentState, product]);
  }
  return (
    <div>
      <div class="wrapper">
        <div class="items">
          <div class="item">
            <h2 class="product-name">{props.name}</h2>
            <img src={props.img} />
            <p class="product-price">Prix: <em>{props.price}</em>€
            </p>
            <button onClick={addToCart}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
    
  


  )
}