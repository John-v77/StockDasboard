import axios from "axios";
const basePath = process.env.REACT_APP_STOCK_API_PATH;

export const searchSymbols = async (query) => {
  console.log(basePath, process.env.REACT_APP_STOCK_API_KEY, "xx");
  const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_STOCK_API_KEY}`;
  console.log("searching", url);
  const res = await axios.get(url);

  console.log("searching res1:", res);
  return res.data.result;
};
