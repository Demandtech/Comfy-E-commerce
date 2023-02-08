import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  Login,
  //AuthWrapper

} from './pages'
// import PrivateRoute from './pages/PrivateRoute'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/products/:id' element={<SingleProduct />} />
        <Route
          path='/checkout'
          element={
            <PrivateRoute path='/checkout'>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
