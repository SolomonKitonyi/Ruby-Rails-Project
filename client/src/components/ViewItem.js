import React,{useEffect, useState} from "react"
import {useParams,useHistory} from "react-router-dom"

function ViewItem () {
    const params = useParams()
    const itemId = params.id
    const [stockData,setStockData] = useState({})
    const [desc,setDec] = useState("")
    const history = useHistory();
    const [refresh,setRefresh] = useState(false)

    useEffect(() => {
        fetch(`${itemId}`)
        .then(res => res.json())
        .then(data => setStockData(data))
    },[refresh,itemId])
    function deleteStock() {
        history.push("/")
        alert("Stock Deleted")
        setRefresh(!refresh)
        window.location.reload(false)
    }
    function update() {
        setRefresh(!refresh)
        setDec("")
        alert("Stock Updated")
    }
    function handleSubmit(e) {
        e.preventDefault()
        if(desc.length < 0) return
        const formData = {
            name: stockData.name,
            quantity: stockData.quantity,
            description: desc
        }

        fetch(`/stocks/${itemId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then( update)
    }
    function handleClick(e){
        fetch(`/stocks/${itemId}`,{
            method: "DELETE"
        })
        .then(deleteStock)
    }
    return (
        <div className="view-item-div">
         <div className='stock-item-div'>
            <h2>{stockData.name}</h2>
            <h3>{stockData.quantity}</h3>
            <h4>{stockData.description}</h4>
            <form onSubmit={handleSubmit}>
             <input required={true} placeholder="update description" onChange={(e) => setDec(e.target.value)} value={desc}/>
             <button>Update</button>
            </form>
            <button onClick={handleClick}>Delete Stock</button>
         </div>
        </div>
    )
}
export default ViewItem;