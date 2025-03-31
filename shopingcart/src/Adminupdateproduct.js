import { useEffect, useState } from "react"
import Left from '../../shopingcart/src/Left'
import { useParams } from "react-router-dom"


function Adminupdateproduct() {
    const { id } = useParams()
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [mdesc, setMdesc] = useState('')
    const [price, setPrice] = useState('')
    const [qty, setQty] = useState('')
    const [img, setImg] = useState('')
    const [status, setStatus] = useState('')
    const [message, setMessage] = useState('')
    useEffect(() => {
        fetch(`/api/singaldata/${id}`).then((resp) => { return resp.json() }).then((data) => {
            //console.log(data)
            if (data.status === 200) {
                setName(data.apiData.name)
                setDesc(data.apiData.desc)
                setMdesc(data.apiData.mdesc)
                setPrice(data.apiData.price)
                setQty(data.apiData.quantity)
                setStatus(data.apiData.status)
                setImg(data.apiData.img) 

            } else {
                setMessage(data.message)
            }
        })
    }, [])


    function handleform(e) {
        e.preventDefault()
        let productfromdata = new FormData()
        productfromdata.append('name', name)
        productfromdata.append('desc', desc)
        productfromdata.append('mdesc', mdesc)
        productfromdata.append('price', price)
        productfromdata.append('qty', qty)
        productfromdata.append('img', img)
        productfromdata.append('status', status)
        fetch(`/api/productdataupdate/${id}`, {
            method: 'PUT',
            body: productfromdata
        }).then((resp) => { return resp.json() }).then((data) => {
            //console.log(data)
            if (data.status === 200) {
                setMessage(data.message)
            } else {
                setMessage(data.message)
            }
        })
    }


    return (
        <section>

            <div className="container">
                <div className="row">
                    <Left />
                    <div className="col-md-8">


                        <h2> procude data here</h2>
                        <p> {message}</p>
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
                            <label> product status</label>
                            <select 
                             value={status}
                                onChange={(e)=>{setStatus(e.target.value)}}  className="form-select">
                                
                                <option value="IN STOCK"> IN STOCK</option>
                                <option value="OUT STOCK"> OUt OF STOCK</option>

                            </select>
                            <div className="mt-2"><img src={`/${img}`} style={{ width: '50px' }}></img></div>
                            <label>img</label>
                            <input type="file" className="form-control"
                                onChange={(e) => { setImg(e.target.files[0]) }}

                            />

                            <button type="submit" className="btn btn-info form-control">add</button>



                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Adminupdateproduct;