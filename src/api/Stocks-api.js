import axios from "axios";
const basePath = process.env.REACT_APP_STOCK_API_PATH;

export const searchSymbols = async (query) => {
  const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_STOCK_API_KEY}`;
  const res = await axios.get(url);
  return res.data.result;
};

export const fetchStockDetails = async (stockSymbol) => {
  if (stockSymbol) {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_STOCK_API_KEY}`;
    const res = await axios.get(url);
    return res.data;
  }
};

export const fetchQuote = async (stockSymbol) => {
  if (stockSymbol) {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_STOCK_API_KEY}`;
    const res = await axios.get(url);
    return res.data;
  }
};

export const fetchHistoricalData = async (
  stockSymbol,
  resolution,
  from,
  to
) => {
  const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_STOCK_API_KEY}`;
  const res = await axios.get(url);
  return res.data;
};
