import React from "react";
import StockItem from "./StockItem"

function StockList({stock}){
    return (
        <div>
            <h1 style={{color: "gray"}}>Stock</h1>
            <ul className="stock-list" >{stock.map(item => (
                <StockItem key={item.id} item={item} onClick={() => alert("Clicked")}/>
            ))}</ul>
        </div>
    )
}
export default StockList;