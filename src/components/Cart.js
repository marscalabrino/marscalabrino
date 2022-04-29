import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
    const test = useContext(CartContext);
    
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
            <div className="col-6 d-flex flex-column"> {/* CONTENEDOR */}
            <button type="button" className="btn btn-primary p-0 col-3 align-self-center" onClick={test.clear}>Borrar todos</button>

            {
                test.cartList.map(item =>
                <div className="d-flex justify-content-between">                {/* CONTENEDOR CADA PRODUCTO */}
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
            }        
            </div>)
            : <div className="col-6 d-flex flex-column">
                <Link to="/"><button type="button" className="btn btn-primary col-4">Seguir comprando</button></Link>
                <p>No hay productos en el carrito.</p>
            </div>
        }
            <div className="contenedor-totales col-6 d-flex flex-column justify-content-center">
                <h1 className="text-center fs-4">Totales de compra</h1>
                <p className="text-center">El subtotal es: ${test.sumCost()} </p>
                <p className="text-center">Impuestos de 23%: ${calcImpuesto()}</p>
                <p className="text-center">Total: ${calcTotal()}</p>
                <button className=" col-4 btn btn-primary align-self-center">Finalizar compra</button>
            </div>
        </div>
        </>
    )
} ;