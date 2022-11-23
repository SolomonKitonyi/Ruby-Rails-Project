import React from 'react'

function StockItem ({item,onClick}) {
    return (
        <>
         <div className='stock-item-div' onClick={onClick}>
            <h2>{item.name}</h2>
            <h3>{item.quantity}</h3>
            <h4>{item.description}</h4>
         </div>
        </>
    )
}

export default StockItem;