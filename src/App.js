import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer/>
    </>
  );
}

export default App;