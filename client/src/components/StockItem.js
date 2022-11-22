import React from 'react'

function StockItem ({item}) {
    return (
        <>
         <div>
            <h2>{item.name}</h2>
            <h3>{item.quantity}</h3>
            <h4>{item.description}</h4>
         </div>
        </>
    )
}

export default StockItem;