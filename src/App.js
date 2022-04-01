import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer greeting="CURSO REACT MARCOS SCALABRINO"  />
    </>
  );
}

export default App; 
