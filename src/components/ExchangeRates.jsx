import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api";
import {Link} from 'react-router-dom'

const ExchangeRates = () => {

  const [exchangeData, setExchangeData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('TRY')

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/${selectedCurrency}`);
            setExchangeData(response.data);
            setLastUpdate(response.data.time_last_update_utc);
        } catch (error) {
            console.error('Error fetching exchange data:', error);
        }
    };

    fetchData();
}, [selectedCurrency]);

const handleSelectedCurrency = (e) => {
  setSelectedCurrency(e.target.value)
}


  return (
    <div className="container exchangeRatesSection">
      <div className="exchangeRatesSectionHeader">
        <h2 className="exchangeTitle">Döviz Kurları</h2>
        <div className="lastUpdateInfo">
          <span>Son Güncelleme: </span>
          <span>{lastUpdate}</span>
        </div>
        <select onChange={handleSelectedCurrency} className="selectExchange" value={selectedCurrency} name="currencyExchangeRate" id="currencyExchangeRate">
          {
            exchangeData && Object.keys(exchangeData.conversion_rates).map(currency => (
              <option value={currency}>{currency}</option>
            ))
          }
        </select>
      </div>
      <table className="exchangeRatesTable">
        <thead>
          <tr>
            <th>Döviz Cinsi</th>
            <th>Fiyat</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {exchangeData && Object.keys(exchangeData.conversion_rates).map(currency => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{exchangeData.conversion_rates[currency]}</td>
              <td><Link to="/satinalma" className="tradeBtn">Al / Sat</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRates;
