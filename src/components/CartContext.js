import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [qtyTotal, setqtyTotal] = useState([]);

    const addItem = (item, qty) => {
        console.log(item);
        let isInCart = cartList.find(product => product.id === item.id);
        if ( isInCart === undefined && item.stock > 0 ) {
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
            /* isInCart.qtyItem += qty; */
            setqtyTotal(isInCart.qtyItem += qty)
        }
    }
    const clear = (item) => {
        setCartList([]);
    }  

    const removeItem = (itemId) => {
        let resp =  cartList.filter(item => item.id != itemId);
        setCartList(resp)
    }

    const sumQtyTotal = () => {
        let sum = cartList.map(item => item.qtyItem);
        return sum.reduce(((qtyA, qtyB) => qtyA + qtyB), 0);
    }
    const sumCost = () => {
        let sum = cartList.map(item => item.cost*item.qtyItem);
        return sum.reduce(((a, b) => a + b), 0);
    }
    
    return (
        <CartContext.Provider value={{ cartList, addItem, clear, removeItem, sumQtyTotal, sumCost }}>
            {children}
        </CartContext.Provider>
    ) 
}

export default CartContextProvider;