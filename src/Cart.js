import React, {useContext} from 'react';
import {CartContext} from './CartContext';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <div class="cart">
        <p class="title-2"> Votre panier </p>
        <span>Nombre de produits dans le panier : {cart.length}</span>
        <br />
        <span>Prix total : {totalPrice} €</span>
      </div>
    </div>
  )
}