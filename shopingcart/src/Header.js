import { useContext } from "react";
import { Contextapi } from "./Contextapi";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    const { loginname, setloginname } = useContext(Contextapi)
    const { cart } = useContext(Contextapi)
    function handlogout(e) {
        setloginname(localStorage.removeItem('loginname'))

        navigate('/')
    }
    return (
        <>
            {loginname ?
                <section id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>welcome to{loginname}</h2>
                            </div>
                            <div className="col-md-8 ">
                                <button className="btn btn-success" onClick={(e) => { handlogout(e) }}>logout</button>
                                <Link to='/myorder' ><button className="btn btn-primary me-2">MY ORDER</button></Link>
                                <Link to='/cart'> <button className="btn btn-warning me-2"> cart={!cart.totalItems ? 0 : cart.totalItems}</button></Link>
                                <Link to='/product' ><button className="btn btn-info me-2"> product</button></Link>
                            </div>
                        </div>
                    </div>

                </section>
                : <></>}


        </>

    );
}

export default Header;