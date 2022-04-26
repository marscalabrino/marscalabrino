import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer   />
    {/* <ItemDetailContainer   /> */}
    </>
  );
}

export default App;