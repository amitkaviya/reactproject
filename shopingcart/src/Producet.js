import { useEffect, useState } from "react";
import Producetsrr from "./Producetstr";

function PRoducet() {
    const [productdata, setproductdata] = useState([])
    useEffect((e) => {
        fetch('/api/stockdata').then((resp) => { return resp.json() }).then((data) => {
            console.log(data)
            if (data.status === 200) {
                setproductdata(data.apiData)
            } else {
                console.log(data.message)
            }
        })
    }, [])
    return (
        <section>

            <div className="container">
                <div className="row">


                    {productdata.map((result, tt) => (
                        <Producetsrr pdata={result} />

                    ))}
                </div>
            </div>


        </section>
    );
}

export default PRoducet;