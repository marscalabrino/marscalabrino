import ItemList from './ItemList';
import { useEffect, useState } from "react";
import { getData } from '../utils/products';
import ItemCount from './ItemCount';

const ItemListContainer = () => {
    
    //LLAMAR AL FETCH 
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        async function pedirData() {
            let productos = await getData()
            setDatos(productos)
        }
        pedirData()
    },[])

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