import { useState } from 'react'

const Wallet = () => {

  const [balance, setBalance] = useState(0)
  const [total, setTotal] = useState(0)
  const [foreignCurrencies, setForeignCurrencies] = useState(JSON.parse(localStorage.getItem('foreignCurrencies') || '[]'));

  const handleBalance = (e) => {
    const newBalance = e.target.value
    if(e.target.value >= 0) {
      setBalance(newBalance)
    }
  }

  const addBalance = () => {
    const newTotal = Number(localStorage.getItem('totalBalance')) + Number(balance)
    setTotal(newTotal)
    setBalance(0)
    localStorage.setItem('totalBalance', newTotal.toFixed(2))
  }

  return (
    <div className='container'>
      <h2 className='walletTitle'>Cüzdan</h2>
      <div className='wallet'>
        <h3>Genel</h3>
        <hr />
        <div className='totalSection'>
          <div className='totalLeft'>
            <span className='totalText'>Toplam Bakiye</span>
            <span className='total'>{localStorage.getItem('totalBalance')}₺</span>
            <div className='walletCurrencies'>
              <h5>Varlıklarım</h5>
            {foreignCurrencies.map((currency, index) => (
              <span key={index}>{currency.amount} {currency.currency}</span>
            ))}
          </div>
          </div>
          <div className='totalRight'>
            <span>Bakiye Yükle</span>
              <input className='balanceInput' type="number" value={balance} min="0" placeholder='Tutar' onChange={handleBalance}/>
              <button className='balanceBtn' onClick={addBalance}>Yükle</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet