import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="App navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo   </a>
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
                </div>
                <a className="nav-link align-right" href="#"><CartWidget  /></a>
            </div>
        </nav>
    )
}
export default Navbar;