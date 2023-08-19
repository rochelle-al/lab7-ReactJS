import { useState, useEffect, useReducer } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// Reducer function for handling internal state changes
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: null, bitcoinPrice: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: 'Error fetching Bitcoin price.', bitcoinPrice: null };
    default:
      return state;
  }
};

// Custom hook for fetching and managing Bitcoin price
const useBitcoinPrice = (initialCurrency) => {
  const [currency, setCurrency] = useState(initialCurrency);
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    error: null,
    bitcoinPrice: null,
  });

  useEffect(() => {
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data.bitcoin[currency] });
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };

    fetchBitcoinPrice();
  }, [currency]);

  return {
    currency,
    setCurrency,
    bitcoinPrice: state.bitcoinPrice,
    loading: state.loading,
    error: state.error,
  };
};

export default useBitcoinPrice;