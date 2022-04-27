import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

        return (
        <>
        {
            item
            ?
            <div>
                <h1>{item.name}</h1>
                <img src={item.image}   />
                <p>{item.stock}</p>
                <p>{item.cost}</p>
                <p>{item.description}</p>
            </div>
            : <p> cargandoo...</p>
        }
        </>
    );
}

export default ItemDetail;