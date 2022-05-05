import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import db from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [dato, setDatos] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        const fetchSingleItem = async () => {
            const docSnap = await getDoc(doc(db, "products", id));
            const prueba = 
            docSnap.exists() ?
            docSnap.data()
            : console.log("no doc")
            
            const detalle = { ...prueba, id }
            return detalle;
        }
        fetchSingleItem()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail  item={dato}  />
    )
}

export default ItemDetailContainer;