import React from "react";
import StockItem from "./StockItem"

function StockList({stock}){
    return (
        <div>
            <ul>{stock.map(item => (
                <StockItem key={item.id} item={item}/>
            ))}</ul>
        </div>
    )
}
export default StockList;