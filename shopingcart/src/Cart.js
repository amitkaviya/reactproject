import { useContext, useEffect, useState } from "react";
import { Contextapi } from "./Contextapi";
import { useNavigate } from "react-router-dom"

function Cart() {
    const navigate = useNavigate()
    const [cartdata, setCartData] = useState([])
    const { cart, setCart } = useContext(Contextapi)
    const [isloding, setIsloding] = useState(true)
    let amount = 0
    console.log(cart)
    useEffect(() => {
        if (!cart.item) {
            return
        }
        fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ids: Object.keys(cart.item) })
        }).then((resp) => { return resp.json() }).then((data) => {
            //console.log(data)
            if (data.status === 200) {
                setCartData(data.apiData)
                setIsloding(false) 
            } else {
                console.log(error.message)
            }
        })
    }, [cart])
    function handleqty(id) {
        return cart.item[id]
    }




    function handleprice(id, price) {
        let productamout = handleqty(id) * price
        amount += productamout
        return productamout

    }

    function handlin(e, id, qty) {
        let currentqty = handleqty(id)
        //alert(qty)
        //alert(currentqty)
        if (currentqty == qty) {
            //alert(qty)
            alert(`${currentqty} quantity   is avalible in stock`)
            return
        }
        let _cart = { ...cart }
        _cart.item[id] = currentqty + 1
        _cart.totalItems += 1
        setCart(_cart)

    }





    function handlout(e, id) {
        let currentqty = handleqty(id)
        if (currentqty === 1) {
            return
        }
        let _cart = { ...cart }
        _cart.item[id] = currentqty - 1
        _cart.totalItems -= 1
        setCart(_cart)

    }

   function handledelete(e,id){
    let currentqty=handleqty(id)
    let _cart={...cart}
    delete _cart.item[id]
    _cart.totalItems -=currentqty
     setCart(_cart)
   }

    // function handledelete(e, id) {
    //     let currentqty = handleqty(id)
    //     //alert(currentqty)
    //     let _cart = { ...cart }
    //     delete _cart.item[id]
    //     _cart.totalItems -= currentqty
    //     setCart(_cart)
    // }

    function handlecachout(e) {
        const username = localStorage.getItem('loginname')
        fetch(`/api/cartvalue/${username}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cart)
        }).then((resp) => { return resp.json() }).then((data) => {
           // console.log(data)
            if (data.status === 201) {

                alert('you oder has been succefully plesed')
                setCart('')
                navigate('/product')
            } else {
                console.log(data.message)
            }
        })
    }
    return (


        <>
            {cartdata.length ?
                <section id="cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {isloding && <img src="ZKZg.gif" />}
                                <tabel className='table table-hover'>
                                    <thead>
                                        <tr>
                                            <th>s. no</th>
                                            <th>product name</th>
                                            <th>product quantity</th>
                                            <th>price</th>
                                            <th>DATE</th>
                                            <th>Action</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {cartdata.map((result, kk) => (
                                            <tr key={result._id}>
                                                <td>{kk + 1}</td>
                                                <td>{result.name}</td>
                                                <td><button onClick={(e) => { handlin(e, result._id, result.quantity) }}>+</button>{handleqty(result._id)}<button onClick={(e) => { handlout(e, result._id) }}>-</button></td>
                                                <td>{handleprice(result._id, result.price)}</td>
                                                <td><button onClick={(e) => { handledelete(e, result._id) }}>remove</button></td>
                                                <td>{result.cre}</td>


                                            </tr>
                                        ))}
                                        <tr>
                                            <td><h4>Total Amount:{amount}</h4></td>

                                        </tr>
                                        <tr>  <td colSpan="5"><button className="btn btn-info form-control" onClick={(e) => { handlecachout(e) }}> check out</button></td></tr>


                                    </tbody>
                                </tabel >
                            </div>
                        </div>
                    </div>

                </section>
                : <img src="emptycart.png" style={{ width: '100%', height: '400px' }} alt="" />}
        </>
    );
}

export default Cart;