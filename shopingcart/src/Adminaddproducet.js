import { useState } from "react";
import Left from "./Left";

function Adminaddprocudet() {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [mdesc, setMdesc] = useState('')
    const [price, setPrice] = useState('')
    const [qty, setQty] = useState('')
    const [img, setImg] = useState('')
    const [message, setMessage] = useState('')


    function handleform(e) {
        e.preventDefault()
        console.log(name, desc, mdesc, price, qty)
        console.log(img)
        let data = new FormData()
            data.append('name', name);
            data.append('desc', desc);
            data.append('mdesc', mdesc);
            data.append('price', price);
            data.append('qty', qty);
            data.append('img', img)
        fetch('/api/addproduct', {
            method: 'POST',
            body: data
        }).then((result) => { return result.json() }).then((data) => {
            console.log(data)
            if (data.status === 201) {
                setMessage(data.message)

            } else {
                setMessage(data.message)

            }
        })
    }

    return (

        <>

            <div className="container">
                <div className="row">
                    <Left />
                    <div className="col-md-8"><h2>add product</h2>
                        {message}
                        <form onSubmit={(e) => { handleform(e) }}>
                            <label>name</label>
                            <input type="text" className="form-control"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <label>desc</label>
                            <textarea className="form-control"
                                value={desc}
                                onChange={(e) => { setDesc(e.target.value) }}

                            ></textarea>
                            <label>mdesc</label>
                            <textarea className="form-control"
                                value={mdesc}
                                onChange={(e) => { setMdesc(e.target.value) }}
                            ></textarea>
                            <label>price</label>
                            <input type="text" className="form-control"

                                value={price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />
                            <label>qty</label>
                            <input type="text" className="form-control"
                                value={qty}
                                onChange={(e) => { setQty(e.target.value) }}
                            />
                            <label>img</label>
                            <input type="file" className="form-control"
                                onChange={(e) => { setImg(e.target.files[0]) }}

                            />

                            <button type="submit" className="btn btn-info form-control">add</button>


                        </form>




                    </div>
                </div>
            </div>
        </>
    );
}

export default Adminaddprocudet;