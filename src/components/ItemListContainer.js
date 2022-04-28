import ItemList from './ItemList';
import { useEffect, useState } from "react";
import { getData } from '../utils/products';
import { products }  from "../utils/products";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
            if (id == undefined) {
                getData(2000, products)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
            } else {
                getData(2000, products.filter(item => item.category === parseInt(id)))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
            }
            console.log(id);
        }, [id]);

     return (
         <>
         <div className='d-flex flex-wrap p-2 bg-light'>
            {/* CONTENEDORE DE TODOS LOS PRODUCTOS */}
            <ItemList  productos={datos}  />
         </div>
         </>
     )
 }

 export default ItemListContainer;