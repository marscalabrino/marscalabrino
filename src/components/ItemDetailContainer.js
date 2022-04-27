import React from 'react';
import { useEffect, useState } from 'react';
import { getData } from '../utils/products';
import ItemDetail from "./ItemDetail";
import { products } from '../utils/products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [dato, setDatos] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getData(2000, products.find(item => item.id === parseInt(id)))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail  item={dato}  />
    )
}

export default ItemDetailContainer;