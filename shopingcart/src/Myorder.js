import { useContext, useEffect, useState } from "react";
import { Contextapi } from "./Contextapi";


function MYORDER() {
    const [userdata, setuserdata] = useState([])
    const { loginname } = useContext(Contextapi)
    useEffect(() => {
        fetch(`/api/userdata/${loginname}`,).then((resp) => { return resp.json() }).then((data) => {
            console.log(data)
            if (data.status === 200) {
                setuserdata(data.apiData)
            } else {
                console.log(data.message)
            }
        })
    }, [])


    return (
        <section>
            <h2 style={{ textAlign: "center" }}>my order</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>s.no</th>
                                    <th>product name</th>
                                    <th>quantity</th>
                                    <th>price</th>
                                    <th>Date</th>

                                </tr>
                            </thead>
                            <tbody>
                                {userdata.map((result, ff) => (
                                    <tr key={result._id}>
                                        <td>{ff + 1}</td>
                                        <td>{result.name}</td>
                                        <td>{result.qty}</td>
                                        <td>{result.price}</td>
                                        <td>{result.createDate}</td>
                               
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MYORDER;