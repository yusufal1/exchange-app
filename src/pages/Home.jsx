import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ExchangeRates from '../components/ExchangeRates'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <ExchangeRates/>
    </div>
  )
}

export default Home