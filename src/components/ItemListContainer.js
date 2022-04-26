import ItemList from './ItemList';
import { useEffect, useState } from "react";
import { getData } from '../utils/products';
import ItemCount from './ItemCount';
import { products }  from "../utils/products";

const ItemListContainer = () => {
    
    //LLAMAR AL FETCH 
    const [datos, setDatos] = useState([]);

    /* useEffect(() => {
        async function pedirData() {
            let productos = await getData()
            setDatos(productos)
        }
        pedirData()
    },[]) */
    useEffect(() => {
            getData(2000, products)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }, []);

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