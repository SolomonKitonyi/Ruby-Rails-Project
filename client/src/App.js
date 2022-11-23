import {useState,useEffect} from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
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
      <Header />
      <StockList stock={stock}/>
      <Footer />
    </div>
  );
}

export default App;
