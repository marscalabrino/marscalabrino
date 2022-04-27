import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="App navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/'> <a className="navbar-brand" href="#">Logo   </a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Products</a>
                        <a className="nav-link" href="#">Pricing</a>
                        {/* <a className="nav-link disabled">Disabled</a> */}
                    </div>
                    {/* CATEGORIAS */}
                    <div className="navbar-nav centered">
                    <Link to='/category/1'><a className="nav-link active" aria-current="page" href="#">CATEGORIA 1</a></Link>
                    <Link to='/category/2'><a className="nav-link" href="#">CATEGORIA 2</a></Link>
                    <Link to='/category/3'><a className="nav-link" href="#">CATEGORIA 3</a></Link>
                    </div>
                </div>
                <a className="nav-link align-right" href="#"><CartWidget  /></a>
            </div>
        </nav>
    )
}
export default Navbar;