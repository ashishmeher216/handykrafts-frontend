import React from 'react'
import { useState } from 'react'
import { toast } from "react-toastify";
import Layout from '../components/Layout';

function Signin(props) {
    const { signinRequest } = props;
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signinFun = (e) => {
        e.preventDefault();
        if (email === "") {
            return toast.error("Email is required", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
        if (!email.includes('@')) {
            return toast.error("Invalid email!", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
        if (password === "") {
            return toast.error("Password is required", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
        ///login here
        const user = {
            email: email,
            password: password
        }

        signinRequest(user);
        
        setEmail("");
        setPassword("");

    }

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Computer image" />
                </div>
                <div className="col-md-6">
                    <form name="Signin">
                        <h3 className="text-center font-weight-bold">Sign In</h3>
                        <p className="text-center">Take your art to the next level.</p>

                        <label htmlFor="email"> Email </label>
                        <input className='inputField' type="text" id="email" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="password">Password </label>
                        <input className='inputField' type="text" id="password" name="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <input type="submit" defaultValue="Submit" onClick={signinFun} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin