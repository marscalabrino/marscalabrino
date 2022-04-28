import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) => {
        let isInCart = cartList.find(product => product.id === item.id);
        if ( isInCart === undefined) {
            setCartList([
                ...cartList,
                {
                    name: item.name,
                    image: item.image,
                    id: item.id,
                    cost: item.cost,
                    qtyItem: qty
                }
            ]);
        } else {
            isInCart.qtyItem += qty;
        }
    }
    const clear = (item) => {
        setCartList([]);
    }

    const removeItem = (itemId) => {
        let resp =  cartList.filter(item => item.id != itemId);
        setCartList(resp)
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    ) 
}

export default CartContextProvider;