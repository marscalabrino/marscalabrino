import React from 'react';
import { useEffect, useState } from 'react';
import { getData } from '../utils/products';
import ItemDetail from "./ItemDetail";
import { products } from '../utils/products';

const ItemDetailContainer = () => {
    const [dato, setDatos] = useState({});

    useEffect(() => {
        getData(2000, products[1])
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail  item={dato}  />      
        
    )
}

export default ItemDetailContainer;