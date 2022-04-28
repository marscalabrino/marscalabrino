import { Link } from "react-router-dom";

export default function Checkout() {
    
    return (
        <>
        <Link to='/cart'><button className="btn btn-primary p-0" >Checkout</button></Link>
        </>
    )
} ;