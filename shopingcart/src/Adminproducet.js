import { Link } from "react-router-dom";
import Left from "./Left";
import { useEffect, useState } from "react";

function Adminproducet() {
    const [message,setMessage]=useState('')
    const[product,setProduct]=useState([])
useEffect(()=>{
    fetch('/api/allrecord').then((result)=>{ return result.json()}).then((data)=>{
        console.log(data) 
        if(data.status===200){
            setProduct(data.apiData)
        }else{
            setMessage(data.message)
        }
            })

},[])

    


   
    return ( 
        <>
        <section id="mid">
        <div className="container">
            <div className="row">
             <Left/>
                <div className="col-md-8">
<h2>project managment</h2>
<Link to='/addproducet'><button className="btn btn-info form-control">Add new product</button></Link>
<tabel className="table table-hover">
    <thead>
    <tr>
        <th>s.no</th>
        <th>producr name</th>
        <th>desc.</th>
        <th>more desc</th>
        <th>price</th>
        <th>quantity</th>
        <th>crate date</th>
        <th>Image</th>
        <th>product status</th>
        <th>Action</th>
   
    </tr>
    </thead>
    <tbody>
        
    {product.map((result,dd)=>(
  <tr>
  <td>{dd+1}</td>
  <td>{result.name}</td>
  <td>{result.desc}</td>
  <td>{result.mdesc}</td>
  <td>{result.price}</td>
  <td>{result.quantity}</td>
  <td>{result.createDate}</td>
  <td> <img  style={{width:'50px'}} src={result.img}/></td>
  <td>{result.status}</td>
<td> <Link to={`/producatupdateform/${result._id}`}><button>update</button></Link> </td>
           </tr>
    ))}

       

    
     
    </tbody>
</tabel>


                </div>
            </div>
        </div>
        </section>
        </>

     );
}

export default Adminproducet;