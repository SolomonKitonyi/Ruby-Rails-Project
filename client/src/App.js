import {useState,useEffect} from "react";
import './App.css';
import StockList from "./components/StockList";

function App() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetch("/stocks")
      .then((r) => r.json())
      .then((data) => setStock(data));
  }, []);

  return (
    <div className="App">
      <h1>Stock</h1>
      <StockList stock={stock}/>
    </div>
  );
}

export default App;
