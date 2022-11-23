import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewStock () {
    const [name,setName] = useState("")
    const [quantity,setQuantity] = useState("")
    const [description,setDescription] = useState("")
    const history = useHistory();
    function createStock() {
        history.push("/stocks")
        alert("Stock created")
        window.location.reload(false)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            name,
            quantity,
            description
        }
        fetch('/stocks', {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then (createStock)
    }
    return (
        <div className="new-cont">
            <form className="new-stock-div" onSubmit={handleSubmit}>
                <h2>New Stock</h2>
                <input placeholder="Name" required value={name} onChange={(e) =>setName(e.target.value)}/>
                <input placeholder="Quantity" required value={quantity} onChange={(e) =>setQuantity(e.target.value)}/>
                <input placeholder="Description" required value={description} onChange={(e) =>setDescription(e.target.value)}/>
                <button>Create</button>
            </form>
        </div>
    )
}
export default NewStock;