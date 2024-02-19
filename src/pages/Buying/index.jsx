import React from 'react'
import ExchangeRates from '../../components/ExchangeRates'
import Wallet from '../../components/Wallet'
import Trade from '../../components/Trade'


const Buying = () => {
  return (
    <div>
        <Wallet/>
        <Trade/>
        <ExchangeRates/>
    </div>
  )
}

export default Buying