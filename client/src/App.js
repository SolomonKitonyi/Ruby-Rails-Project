import {useState,useEffect} from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import StockList from "./components/StockList";
import {Route, Switch} from 'react-router-dom'
import ViewItem from "./components/ViewItem";
import NewStock from "./components/NewStock";

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
      <Switch >
        <Route exact path={"/"} >
         <StockList stock={stock}/>
        </Route>
        <Route exact path={"/stocks"} >
          <StockList stock={stock} />
        </Route>
        <Route axact path={`/stocks/new`} >
         <NewStock />
        </Route>
        <Route axact path={`/stocks/:id`} >
         <ViewItem/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
