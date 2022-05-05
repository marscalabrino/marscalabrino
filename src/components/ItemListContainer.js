import ItemList from './ItemList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import db from '../utils/firebaseConfig';
import { getDocs, collection, doc } from 'firebase/firestore';
import { query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
    
    useEffect(() => {
        const fetchFireStore = async (idCategory) => {
            let c;
            
            if (idCategory) {
                c = query(collection(db, "products"), where('category', '==', parseInt(idCategory)));
                console.log("true " + idCategory );
            } else {
                c = query(collection(db, "products"));
                console.log("false");
            }
        
            const querySnapshot = await getDocs(c);
            const dataFireStore = querySnapshot.docs.map((document) => ({
                id: document.id,
                ...document.data()
            }));
            return dataFireStore;
            }
            fetchFireStore(idCategory)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }, [idCategory]);
    
   
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