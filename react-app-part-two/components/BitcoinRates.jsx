import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

function BitcoinRates() {
    const { isHappy } = useMood();
    const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
    const { currency, setCurrency, bitcoinPrice, loading, error } = useBitcoinPrice(currencies[0]);
  
    const options = currencies.map((curr) => (
      <option value={curr} key={curr}>
        {curr}
      </option>
    ));
  
    return (
      <div className="BitcoinRates componentBox">
        <h3>Bitcoin Exchange Rate</h3>
        <p>Current mood: {isHappy ? 'Happy' : 'Sad'}</p>
        <label>
          Choose currency:
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {options}
          </select>
        </label>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <p>Current Bitcoin price in {currency}: {bitcoinPrice}</p>
        )}
      </div>
    );
  }
  
  export default BitcoinRates;
  