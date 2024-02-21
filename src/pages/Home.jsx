import React from 'react'
import Banner from '../components/Banner'
import ExchangeRates from '../components/ExchangeRates'
import News from '../components/News'

const Home = () => {
  return (
    <div>
        <Banner/>
        <News/>
        <ExchangeRates/>        
    </div>
  )
}

export default Home