import ItemCount from './ItemCount';

const ItemListContainer = () => {
     return (
         <>
         <div className='col-4 d-flex flex-column item-container m-3 bg-light'>
            <div>Producto 1</div>
            <ItemCount    />
         </div>
         </>
     )
 }

 export default ItemListContainer;