import {useState}  from "react";

function ItemCount({ stock, initial,  onAdd }) {
    // Desarrollar lógica
    const [rate, setRate] = useState(initial); //estado cantidad
    
    const increment = () => {
        if (rate < stock) {
            setRate(rate+1)
        }
    }
    const decrement = () => {
        if (rate > initial) {
            setRate(rate-1)
        }
    }
    
    return (
    <>
        <div className="d-flex flex-wrap m-auto btn-group col-8">
            <button type="button" className="btn btn-primary p-0" onClick={decrement}>-</button>
            <button className="btn btn-primary p-0">{rate}</button>
            <button type="button" className="btn btn-primary p-0" onClick={increment}>+</button>
            <button type="button" className="btn btn-primary p-0" onClick={() => onAdd(rate)}>ADD TO CART</button>
        </div>    
    </>
    )
    
}

   
export default ItemCount;