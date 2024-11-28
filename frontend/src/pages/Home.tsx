import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CarList from '../components/CarList'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <CarList/>
    </div>
  )
}

export default Home