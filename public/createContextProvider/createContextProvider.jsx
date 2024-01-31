// import { useState } from 'react';
import './createContextProvider.css';
import CartHeader from './components/CartHeader.jsx';
import Product from './components/Product.jsx';

import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvider from './store/shopping-cart-context.jsx'


export default function CreateContextProvider(){
    
    
    return(
        <div className="create-context-class">
        <CartContextProvider>
          <CartHeader
          />
          <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
          </Shop>
        </CartContextProvider>
        
      </div>       

    )
}
