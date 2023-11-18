import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import StockContext from "./context/StockContext";

function App() {
  const [stockSymbol, setStockSymbol] = useState("");
  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <div className="App">
        <Dashboard />
      </div>
    </StockContext.Provider>
  );
}

export default App;
