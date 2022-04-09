import Item from "./Item";

export default function ItemList({productos}) {
    console.log(productos, "Estoy en itemlist");
    return (
        /* CONTENEDOR CADA PRODUCTO */
        <>
        {
            productos.length > 0 
            ? productos.map((e) => <Item key={e.id} id={e.id} title={e.name} stock={e.stock} price={e.cost} picture={e.image}   /> )
            : <p>Cargando productos...</p>
        }
        </>
    )
} ;