import ItemCount  from "./ItemCount";

const Item = ({ id, title, stock, price, picture }) => {
    
    /* var onAdd = (a) => {
        if (a > 0 && stock > 0)
        alert("Se han agregado " + a + " items al carrito.");
    } */
    return (
        /* DETALLES DE PRODUCTO */
        <div className="contenedor-producto col-4 p-3 bg-light rounded">
            <img src={picture} className="w-100" />
           <div className="p-3 bg-white">
                    <div className="top-left">
                        <p className="text-bold ms-4 mt-3 mb-0 p-0 fs-4">{title}</p>
                        <p className="ms-4 mb-0 p-0 fs-6 top-0">Piece N° {id}</p>
                    </div>
                    <div className="d-flex">
                        <p className="detalles-producto m-0 col-6">$ {price}</p>
                        <p className="detalles-producto m-0 text-end col-6">Quedan {stock} unid.</p>
                    </div>
                    <ItemCount   stock={stock} initial={1} /* onAdd={} */  />
           </div>
        </div>
);
}

export default Item;