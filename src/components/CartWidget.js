import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const info = useContext(CartContext);

    return (
        <Badge badgeContent={info.sumQtyTotal()} color="secondary">
            <ShoppingCartOutlined  />
        </Badge>
    )
}

export default CartWidget;