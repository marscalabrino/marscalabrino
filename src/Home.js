import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';

const Home = () => {
    return (
        <BrowserRouter>
            <Navbar  />
            <Routes>
                <Route path="/" element={<ItemListContainer  />}  />
                <Route path="/category/:id" element={<ItemListContainer  />}  />
                <Route path="/item/:id" element={<ItemDetailContainer  />}  />
            </Routes>
        </BrowserRouter>
    )
}

export default Home;