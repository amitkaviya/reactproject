import { useState } from "react";
import { Link } from "react-router-dom";

function Reg() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [meassage, setmessage] = useState('')

    function handleform(e) {
        e.preventDefault()
        // console.log(username,password)
        const data = { username, password }
        fetch('/api/reg', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((result) => { return result.json() }).then((data) => {
            console.log(data)
            if (data.status === 201) {
                setmessage(data.message)
            } else {
                setmessage(data.message)
            }

        })
    }
    return (
        <>
            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <p>{meassage}</p>
                            <h2>new register!!!</h2>
                            <form onSubmit={(e) => { handleform(e) }}>
                                <label>username</label>
                                <input type="text" className="form-control"
                                    value={username}
                                    onChange={(e) => { setusername(e.target.value) }}

                                />
                                <label>password</label>
                                <input type="text" className="form-control"
                                    value={password}
                                    onChange={(e) => { setpassword(e.target.value) }}
                                />
                                <button type="submit" className="form-control btn btn-info">login</button>
                            </form>

                            <p> <Link to='/'>allready account click to login </Link> </p>

                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Reg;