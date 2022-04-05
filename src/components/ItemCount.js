import {useState}  from "react";

function ItemCount({ stock, initial,  onAdd }) {
    // Desarrollar lógica
    var stock = 5; //maximo compra
    var initial = 1; //minimo compra
    const [rate, setRate] = useState(initial); //estado cantidad
    
    var onAdd = () => {
        if (rate > 0 && stock > 0)
        alert("Se han agregado " + rate + " items al carrito.");
    }
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
    <div className="d-flex justify-content-around mt-auto">
        <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
        <p className="fs-3 value-rate">{rate}</p>
        <button type="button" className="btn btn-primary" onClick={increment}>+</button>
        <button type="button" className="btn btn-primary" onClick={onAdd}>ADD TO CART</button>
    </div>    
    </>
    )
    
}

   
export default ItemCount;