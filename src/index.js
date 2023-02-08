import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'


const root = ReactDOM.createRoot(document.getElementById('root'))

//dev-y255mb1jv7t0xexp.us.auth0.com
//Yzz6QFPecZGO0rGi7JnkaSd7GHldOKbt

root.render(
  <UserProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </UserProvider>
)
