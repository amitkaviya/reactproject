import { useContext } from "react";
import { Link } from "react-router-dom";
import { Contextapi } from "./Contextapi";



function Producetsrr(props) {
  const { pdata } = props
  const { cart, setCart } = useContext(Contextapi)
  //console.log(pdata)
  function handleaddcart(e, id, qty) {
    //  if(_cart.item[id]>=qty){
    //   alert('not avelable qty')
    //   return
    //  }
    //console.log(id)
    let _cart = { ...cart }
    if (!_cart.item) {
      _cart.item = {}
    } if (!_cart.item[id]) {
      _cart.item[id] = 1
    } else {
      _cart.item[id] += 1
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 1
    } else {
      _cart.totalItems += 1
    }
    setCart(_cart)
    //console.log(cart)



  }

  return (


    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={pdata.img} class="card-img-top mx-auto" style={{ width: "100px" }} />
        <div className="card-body">
          <h5 className="card-title">{pdata.name}</h5>
          <p className="card-text">{pdata.mdesc} </p>
          <Link href="#" class="btn btn-info">more details</Link>
          <button className="btn btn-primary" onClick={(e) => { handleaddcart(e, pdata._id, pdata.quantity, pdata.createDate) }}> Add cart</button>
        </div>
      </div>
    </div>






  );
}

export default Producetsrr;