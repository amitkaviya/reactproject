import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Login() {
    const { setloginname } = useContext(Contextapi)
    const navigate = useNavigate()
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [message, setmessage] = useState('')
    const [login, setlogin] = useState('')
    function handleform(e) {
        e.preventDefault()
        console.log(username, password)
        const formdata = { username, password }
        fetch('/api/logincheck', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata)
        }).then((result) => { return result.json() }).then((data) => {
            //console.log(data)
            if (data.status === 200 && data.username === 'admin') {
                localStorage.setItem('loginname', data.username)
                setloginname(localStorage.getItem('loginname'))
                //localStorage.setItem('loginname',data.username)
                navigate('/deshboard')
            } else if (data.status === 200 && data.username !== 'admin') {
                localStorage.setItem('loginname', data.username)
                setloginname(localStorage.getItem('loginname'))
                navigate('/product')
            } else {
                setmessage(data.message)
            }


        })
    }
    return (
        <section id="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        {message}
                        <h2>signup Here !!!</h2>
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

                        <p> <Link to='/reg'>Register</Link> </p>

                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    );
}

export default Login;