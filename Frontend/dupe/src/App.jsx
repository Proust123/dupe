import React from 'react'
import Main from './Components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import Cart from './Components/Cart'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Main/>}/>
          <Route path='/products' element = { <Products />}/>
          <Route path='/cart' element = { <Cart /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App