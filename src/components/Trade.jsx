import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Trade = () => {
  const [purchasedAmount, setPurchasedAmount] = useState(0);
  const [totalBalance, setTotalBalance] = useState(localStorage.getItem('totalBalance') || 0);
  const [exchangeData, setExchangeData] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('TRY');
  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState(null);
  const [quantityAvaiable, setQuantityAvailable] = useState(null)
  const [foreignCurrencies, setForeignCurrencies] = useState(JSON.parse(localStorage.getItem('foreignCurrencies') || '[]'));

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/c037abf9c68614be3ef932bb/latest/TRY`);
      setExchangeData(response.data);
    };

    fetchData();

    setQuantityAvailable((totalBalance * selectedCurrencyValue).toFixed(2));
  }, [selectedCurrency, totalBalance, selectedCurrencyValue]);

  useEffect(() => {
    setTotalBalance(localStorage.getItem('totalBalance') || 0);
  }, [purchasedAmount]);

  const handleBuy = () => {
    const newBalance = totalBalance - Number(purchasedAmount / selectedCurrencyValue);
    setTotalBalance(newBalance);
    localStorage.setItem('totalBalance', newBalance.toFixed(2));

    const existingCurrencyIndex = foreignCurrencies.findIndex(currency => currency.currency === selectedCurrency);
    
    if (existingCurrencyIndex !== -1) {
      const updatedCurrencies = [...foreignCurrencies];
      updatedCurrencies[existingCurrencyIndex].amount += Number(purchasedAmount);
      setForeignCurrencies(updatedCurrencies);
    } else {
      const newForeignCurrency = { currency: selectedCurrency, amount: Number(purchasedAmount) };
      setForeignCurrencies(prevCurrencies => [...prevCurrencies, newForeignCurrency]);
    }
  };

  useEffect(() => {
    localStorage.setItem('foreignCurrencies', JSON.stringify(foreignCurrencies));
  }, [foreignCurrencies]);

  const handleSelectedCurrency = (e) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);

    if (exchangeData && exchangeData.conversion_rates[currency]) {
      setSelectedCurrencyValue(exchangeData.conversion_rates[currency]);
    }
  };

  return (
    <div className='container'>
      <div className='tradeSection'>
        <span className='tradeTotal'>Bakiye: {parseFloat(totalBalance).toFixed(2)}₺</span>        
        <div className='tradeSectionInputs'>
          <div className='purchasedAmount'>
            <label htmlFor="purchasedAmount">Tutar</label>
            <input name='purchasedAmount' id='purchasedAmount' type="number" min="0" max={quantityAvaiable} onChange={(e) => setPurchasedAmount(e.target.value)} placeholder=''/>
          </div>
          <div>
            <label htmlFor="amountExchange">Tutar</label>
            <input name='amountExchange' id='amountExchange' min="0" type="number" placeholder={`${quantityAvaiable}${selectedCurrency}`} disabled/>
          </div>
          <div>
            <span>Döviz: </span>
            <select className="selectExchange" onChange={handleSelectedCurrency} value={selectedCurrency}>
              {exchangeData && Object.keys(exchangeData.conversion_rates).map(currency => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <button onClick={handleBuy} className='tradeBtn'>Satın Al</button>
        </div>
        <div className='foreignCurrencies'>
          <h4>Varlıklarım</h4>
          <ul>
            <li>{parseFloat(totalBalance).toFixed(2)}₺</li>
            {foreignCurrencies.map((currency, index) => (
              <li key={index}>{currency.amount} {currency.currency}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trade;
