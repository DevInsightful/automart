import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import { useReducer } from 'react';
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  // function reducer(state:any, action:any) {
  //   if(action.type==='add'){
  //     state.cart.push(action.payload)
  //   }
  // }
  // const [state, dispatch] = useReducer<any>(reducer, { cart: {} });
  return <Signup />
  return (
    <div className='bg-[#0d0e11] min-h-screen'>
    <Home/>
    <Products/>
    <Footer/>
    </div>
  )
}

export default App
