import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

const ItemDetail = ({item}) => {
    const [ ItemQty, setItemQty ] = useState(0);

    const onAdd = (qty) => {
        if (qty > 0 && item.stock > 0)
        alert("Se han agregado " + qty + " items al carrito.");
        setItemQty(qty)
    }

        return (
        <>
        {
            item
            ?
            <div class="d-flex">
                <div class="col-6">
                    <img src={item.image}   />
                </div>
                <div class="col-6">
                    <h1>{item.name}</h1>
                    <p>Stock: {item.stock}</p>
                    <p>Precio: {item.cost}</p>
                    <p>Descripcion: {item.description}</p>
                   { 
                        ItemQty === 0
                        ? <ItemCount stock={item.stock} initial={ItemQty} onAdd={onAdd}  />
                        : <Checkout   />
                   }
                </div>
            </div>
            : <p> cargandoo...</p>
        }
        </>
    );
}

export default ItemDetail;