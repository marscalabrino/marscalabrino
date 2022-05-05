import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { increment, serverTimestamp, setDoc, updateDoc, doc, collection } from "firebase/firestore";
import db from "../utils/firebaseConfig";


export default function Cart() {
    const test = useContext(CartContext);

    const checkout = () => {
        const itemForDB = test.cartList.map(item => ({
            id: item.id,
            title: item.name,
            price: item.cost
        }))

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.id);
            await updateDoc(itemRef, {
                stock:increment(-item.qtyItem)
            });
        });

        let order = {
            buyer: {
                name:"Gonzalo Fernandez",
                email:"gonza@fernandez.ex",
                phone:"434323568"
            },
            date: serverTimestamp(),
            items:itemForDB,
            total: test.sumCost()
        }
        console.log(order);

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        
        createOrderInFirestore()
            .then(result => alert('Tu orden fue creada!'))
            .catch(err => console.log(err))

        test.clear();
    }

    

    const calcImpuesto = () => {
        let imp = 0.23;
        return Math.round(test.sumCost() * imp);
    }

    const calcTotal = () => {
        return calcImpuesto() + test.sumCost();
    }
    
    return (
        <>        
        <h1 className="text-center" >Carrito</h1>
        <div className="d-flex justify-content-around">
        
        {
            test.cartList.length > 0 ? (
            <div className="d-flex flex-wrap col-12"> {/* CONTENEDOR */}
                <button type="button" className="btn btn-primary p-0 col-12 align-self-center order-1" onClick={test.clear}>Borrar todos</button>
                <div className="contenedor-totales col-4 d-flex flex-column justify-content-center order-3">
                    <h1 className="text-center fs-4">Totales de compra</h1>
                    <p className="text-center">El subtotal es: ${test.sumCost()} </p>
                    <p className="text-center">Impuestos de 23%: ${calcImpuesto()}</p>
                    <p className="text-center">Total: ${calcTotal()}</p>
                    <button className=" col-4 btn btn-primary align-self-center" onClick={checkout}>Finalizar compra</button>
                </div>
                <div className="d-flex col-8 flex-column justify-content-between order-2">
            {
                test.cartList.map(item =>
                <div className="d-flex m-4">                {/* CONTENEDOR CADA PRODUCTO */}
                    <div className="col-4">
                        <img className="img-cart" src={item.image}   />
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-between text-center">
                        <p className="text-bold fs-4">{item.name}</p>
                        <p className="fs-6">Piece N° {item.id}</p>
                        <p className="detalles-producto">$ {item.cost}</p>
                        <p className="detalles-producto">{item.qtyItem} unidades.</p>
                        <button type="button" className="btn btn-primary p-0" onClick={() => {test.removeItem(item.id)}} >Delete</button>
                    </div>
                </div>  
             )
            }   </div>     
            </div>)
            : <div className="col-6 d-flex flex-column">
                <Link to="/"><button type="button" className="btn btn-primary col-4">Seguir comprando</button></Link>
                <p>No hay productos en el carrito.</p>
            </div>
        }
            
        </div>
        </>
    )
} ;