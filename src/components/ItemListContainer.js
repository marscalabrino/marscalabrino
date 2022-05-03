import ItemList from './ItemList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import db from '../utils/firebaseConfig';
import { getDocs, collection, doc } from 'firebase/firestore';
/* import { getData, products } from '../utils/products'; */

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { id } = useParams();

  /*   useEffect(() => {
        getData(2000, products.find(item => item.id === parseInt(id)))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []); */
    
    useEffect(() => {
        const fetchFireStore = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFireStore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFireStore;
        }
        fetchFireStore()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);
   
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