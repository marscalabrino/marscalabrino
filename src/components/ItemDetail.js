import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

        return (
        <>
        {
            item
            ?
            <div>
                <p>Cargooo</p>
                <p>{item.name}</p>
            </div>
            : <p> cargandoo...</p>
        }
        </>
    );
}

export default ItemDetail;