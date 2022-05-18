import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import Checkout from './Checkout';
import { CartContext } from './CartContext';

const ItemDetail = ({item}) => {
    const [ ItemQty, setItemQty ] = useState(0);
    const test = useContext(CartContext)

    const onAdd = (qty) => {
        if (qty > 0 && item.stock > 0)
        setItemQty(qty);
        test.addItem(item, qty);
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