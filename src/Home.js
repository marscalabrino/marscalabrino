import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider  from './components/CartContext.js';

const Home = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar  />
                <Routes>
                    <Route path="/" element={<ItemListContainer  />}  />
                    <Route path="/category/:id" element={<ItemListContainer  />}  />
                    <Route path="/item/:id" element={<ItemDetailContainer  />}  />
                    <Route path="/cart" element={<Cart  />}  />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default Home;