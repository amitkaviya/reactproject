import { Link } from "react-router-dom";

function Left() {
    return (  
        <>
     
        <div className="col-md-3"><Link to='/adminproducet'><button className="btn btn-info form-control mt-2 mb-2">product managment</button></Link>
        <Link to='/system'><button className="btn btn-info form-control mt-2 mb-2">system managment</button></Link></div>
        </>


    );
}

export default Left;