import { query, where, collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig";


/* export const firestoreCategory = async (idCategory) => {
    let c;
    if (idCategory) {
        c = query(collection(db, "products"), where('category', '==', idCategory));
    } else {
        c = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(c);
    const dataFireStore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFireStore;
} */