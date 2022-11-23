import React from 'react'
import { Link} from 'react-router-dom';

function StockItem ({item}) {
    return (
        <>
        <Link to={`stocks/${item.id}`} >
        <div className='stock-item-div'>
            <h2>{item.name}</h2>
            <h3>{item.quantity}</h3>
            <h4>{item.description}</h4>
         </div>
        </Link>
         
        </>
    )
}

export default StockItem;