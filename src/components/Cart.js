import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
    const test = useContext(CartContext);
    console.log(test);

    return (
        <>
        <h1>Carrito</h1>
        <button type="button" className="btn btn-primary p-0" onClick={test.clear}>Borrar todos</button>
        {
            test.cartList.length > 0 && (
            <div className="d-flex flex-column"> {/* CONTENEDOR */}
            {
                test.cartList.map(item =>
                <div className="d-flex">                {/* CONTENEDOR CADA PRODUCTO */}
                    <div className="col-4 h-50">
                        <img src={item.image}   />
                    </div>
                    <div className="col-4">
                        <p className="text-bold ms-4 mt-3 mb-0 p-0 fs-4">{item.name}</p>
                        <p className="ms-4 mb-0 p-0 fs-6 top-0">Piece N° {item.id}</p>
                        <p className="detalles-producto m-0 col-6">$ {item.cost}</p>
                        <p className="detalles-producto m-0 text-end col-6">Comprar unidades {item.qtyItem}</p>
                        <button type="button" className="btn btn-primary p-0" onClick={() => {test.removeItem(item.id)}} >Delete</button>
                    </div>
                </div>  
             )
            }
                
        </div>)
        }
        </>
    )
} ;