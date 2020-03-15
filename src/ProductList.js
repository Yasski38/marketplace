import React from 'react';
import { Product } from './Product';
import iphone1 from './iphone1.png';
import iphone2 from './iphone2.png';
import ipad from './ipad.png';
import watch from './watch.png';
import macbook from './macbook.png';
import watc2 from './watc2.png';

export const ProductList = () => {

  const database = [
    { name: "IPhone XR", price: 599.00, id: 1,  img: iphone1},
    { name: "IPhone 11", price: 809.00, id: 2,   img: iphone2 },
    { name: "Ipad Pro", price: 499.00, id: 3,   img: ipad},
    { name: "IPhone 11", price: 189.00, id: 4,   img: watc2 },
    { name: "IPhone 11", price: 1249.00, id: 5,   img: macbook },
    { name: "IPhone 11", price: 349.00, id: 6,   img: watch }
    
  ]

  return (
    <div class="blue">
      {
        database.map(item => (
          <Product name={item.name} price={item.price} key={item.id} img={item.img} />
        ))
      }
    </div>
  )
}